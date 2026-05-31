document.addEventListener('DOMContentLoaded', () => {
    // --- State Variables ---
    let currentDayIndex = 0; // 0-indexed (Day 1 is index 0)
    let completedDays = JSON.parse(localStorage.getItem('voiceMasteryCompletedDays')) || [];
    
    // --- DOM Elements ---
    const progressBar = document.getElementById('progress-bar');
    const completedDaysText = document.getElementById('completed-days-text');
    const progressPercentage = document.getElementById('progress-percentage');
    const resetBtn = document.getElementById('reset-btn');
    
    const prevDayBtn = document.getElementById('prev-day-btn');
    const nextDayBtn = document.getElementById('next-day-btn');
    const lessonDayTitle = document.getElementById('lesson-day-title');
    
    const lessonTitle = document.getElementById('lesson-title');
    const lessonTheory = document.getElementById('lesson-theory');
    const lessonExercises = document.getElementById('lesson-exercises');
    const lessonTask = document.getElementById('lesson-task');
    const markCompleteBtn = document.getElementById('mark-complete-btn');

    // Recorder Elements
    const recordBtn = document.getElementById('record-btn');
    const stopBtn = document.getElementById('stop-btn');
    const audioPlayback = document.querySelector('.audio-playback');
    const audioPlayer = document.getElementById('audio-player');
    const aiScoringSection = document.getElementById('ai-scoring-section');
    const aiLoading = document.getElementById('ai-loading');
    const aiResult = document.getElementById('ai-result');
    const aiScore = document.getElementById('ai-score');
    const aiFeedback = document.getElementById('ai-feedback');

    // --- Initialization ---
    init();

    function init() {
        // Find the first uncompleted day, or default to day 1
        if (completedDays.length > 0) {
            currentDayIndex = Math.min(completedDays.length, 59); // Max 60 days
        }
        
        updateProgressUI();
        loadLesson(currentDayIndex);
        setupEventListeners();
    }

    function setupEventListeners() {
        prevDayBtn.addEventListener('click', () => {
            if (currentDayIndex > 0) {
                currentDayIndex--;
                loadLesson(currentDayIndex);
            }
        });

        nextDayBtn.addEventListener('click', () => {
            if (currentDayIndex < 59) {
                currentDayIndex++;
                loadLesson(currentDayIndex);
            }
        });

        markCompleteBtn.addEventListener('click', () => {
            const dayNum = currentDayIndex + 1;
            if (!completedDays.includes(dayNum)) {
                completedDays.push(dayNum);
                localStorage.setItem('voiceMasteryCompletedDays', JSON.stringify(completedDays));
                updateProgressUI();
                updateCompleteBtnUI();
            }
        });

        resetBtn.addEventListener('click', () => {
            if (confirm("Bạn có chắc chắn muốn xóa toàn bộ tiến độ không?")) {
                completedDays = [];
                localStorage.removeItem('voiceMasteryCompletedDays');
                currentDayIndex = 0;
                updateProgressUI();
                loadLesson(currentDayIndex);
            }
        });
    }

    function loadLesson(index) {
        const lesson = lessonsData[index];
        const dayNum = index + 1;

        lessonDayTitle.textContent = `Ngày ${dayNum}`;
        lessonTitle.textContent = lesson.title;
        lessonTheory.textContent = lesson.theory;
        lessonTask.textContent = lesson.task;

        // Render exercises
        lessonExercises.innerHTML = '';
        lesson.exercises.forEach(ex => {
            const li = document.createElement('li');
            li.textContent = ex;
            lessonExercises.appendChild(li);
        });

        // Update nav buttons
        prevDayBtn.disabled = index === 0;
        nextDayBtn.disabled = index === 59;

        updateCompleteBtnUI();
    }

    function updateCompleteBtnUI() {
        const dayNum = currentDayIndex + 1;
        if (completedDays.includes(dayNum)) {
            markCompleteBtn.textContent = "Đã Hoàn Thành ✓";
            markCompleteBtn.classList.add('completed');
            markCompleteBtn.disabled = true;
        } else {
            markCompleteBtn.textContent = "Hoàn Thành Ngày Này";
            markCompleteBtn.classList.remove('completed');
            markCompleteBtn.disabled = false;
        }
    }

    function updateProgressUI() {
        const totalCompleted = completedDays.length;
        const percentage = Math.round((totalCompleted / 60) * 100);
        
        completedDaysText.textContent = `Ngày ${totalCompleted}/60`;
        progressPercentage.textContent = `${percentage}%`;
        progressBar.style.width = `${percentage}%`;
    }

    // --- Audio Recording Logic ---
    let mediaRecorder;
    let audioChunks = [];

    recordBtn.addEventListener('click', async () => {
        try {
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            mediaRecorder = new MediaRecorder(stream);
            
            mediaRecorder.start();
            audioChunks = [];
            
            mediaRecorder.addEventListener("dataavailable", event => {
                audioChunks.push(event.data);
            });

            mediaRecorder.addEventListener("stop", () => {
                const audioBlob = new Blob(audioChunks, { type: 'audio/webm' });
                const audioUrl = URL.createObjectURL(audioBlob);
                audioPlayer.src = audioUrl;
                audioPlayback.classList.add('show');
                
                // Stop all tracks to release microphone
                stream.getTracks().forEach(track => track.stop());

                // Trigger AI Scoring Simulation
                aiScoringSection.style.display = 'block';
                aiLoading.style.display = 'block';
                aiResult.style.display = 'none';

                setTimeout(() => {
                    aiLoading.style.display = 'none';
                    aiResult.style.display = 'block';
                    
                    // Simulate score between 75 and 98
                    const score = Math.floor(Math.random() * (98 - 75 + 1)) + 75;
                    aiScore.textContent = `${score}/100`;
                    
                    let feedback = "";
                    if(score >= 90) {
                        feedback = "Tuyệt vời! Năng lượng và độ vang rất tốt. Chúc mừng bạn đã hoàn thành xuất sắc ngày hôm nay!";
                    } else if(score >= 82) {
                        feedback = "Khá tốt! Bạn đã có ý thức kiểm soát hơi thở, tuy nhiên cần mở khẩu hình to hơn một chút nữa để âm thanh rõ nét hơn.";
                    } else {
                        feedback = "Bạn đang hơi gồng cổ họng hoặc thiếu năng lượng. Hãy thả lỏng, hít sâu vào bụng và khởi động lại thanh quản trước khi thử lại nhé.";
                    }
                    aiFeedback.textContent = feedback;
                }, 2000);
            });

            recordBtn.disabled = true;
            recordBtn.classList.add('recording');
            recordBtn.innerHTML = '<span class="record-icon"></span> Đang Thu...';
            stopBtn.disabled = false;
            aiScoringSection.style.display = 'none';

        } catch (err) {
            alert("Lỗi truy cập Micro: " + err.message + "\nVui lòng cấp quyền sử dụng Micro cho trình duyệt.");
        }
    });

    stopBtn.addEventListener('click', () => {
        if (mediaRecorder && mediaRecorder.state === "recording") {
            mediaRecorder.stop();
            
            recordBtn.disabled = false;
            recordBtn.classList.remove('recording');
            recordBtn.innerHTML = '<span class="record-icon"></span> Bắt đầu Thu Âm';
            stopBtn.disabled = true;
        }
    });
});
