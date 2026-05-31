const lessonsData = [
  {
    day: 1,
    title: "Ngày 1: Thức Tỉnh Năng Lượng & Khởi Động (Tony Robbins Style)",
    theory: "Giọng nói uy lực bắt nguồn từ một cơ thể tràn đầy năng lượng. Theo Tony Robbins, sự thay đổi trạng thái thể chất (physical state) sẽ thay đổi giọng nói. Hôm nay chúng ta sẽ đánh thức cơ thể và thiết lập nền tảng hơi thở sâu.",
    exercises: [
      "1. Vươn vai và hít một hơi thật sâu, cảm nhận không khí tràn vào bụng (không nâng ngực).",
      "2. Nhảy nhẹ tại chỗ hoặc vỗ tay để kích hoạt năng lượng trong 1 phút.",
      "3. Thở ra bằng miệng với âm thanh 'Haaaaa' kéo dài hết mức có thể. Lặp lại 5 lần."
    ],
    task: "Ghi âm lại một câu nói quen thuộc (ví dụ: 'Xin chào, tôi là...') và nghe lại mức độ năng lượng."
  },
  {
    day: 2,
    title: "Ngày 2: Posture - Tư thế vàng cho âm thanh (Julian Treasure)",
    theory: "Julian Treasure nhấn mạnh rằng âm thanh là một luồng khí đi qua các ống. Nếu ống bị gập, âm thanh sẽ yếu. Tư thế thẳng lưng, mở rộng ngực là yếu tố tiên quyết.",
    exercises: [
      "1. Đứngựa lưng vào tường, đảm bảo gót chân, mông, vai và đầu đều chạm tường.",
      "2. Giữ tư thế đó, hít sâu vào bụng và nói to: 'Giọng nói của tôi đang thay đổi'.",
      "3. Thả lỏng vai, hơi nâng cằm lên song song với mặt đất."
    ],
    task: "Ghi âm lại giọng nói khi ngồi gù lưng và khi đứng thẳng để so sánh sự khác biệt."
  },
  {
    day: 3,
    title: "Ngày 3: Khởi Động Thanh Quản - Lip Trills (Rung Môi)",
    theory: "Đây là bài tập kinh điển của các ca sĩ và diễn giả chuyên nghiệp giúp thư giãn thanh quản, môi và hỗ trợ kiểm soát luồng hơi đi lên.",
    exercises: [
      "1. Ngậm môi hờ, thổi nhẹ hơi ra để hai môi rung lên bần bật (như tiếng xe mô tô).",
      "2. Nếu khó, hãy dùng 2 ngón tay đẩy nhẹ 2 bên má lên.",
      "3. Vừa rung môi vừa trượt âm thanh từ thấp lên cao rồi từ cao xuống thấp (Siren)."
    ],
    task: "Thực hiện Lip Trill liên tục trong 15 giây mà không bị đứt hơi."
  },
  {
    day: 4,
    title: "Ngày 4: Cộng Hưởng Mũi (Nasal Resonance) - Âm 'NG'",
    theory: "Cộng hưởng giúp âm thanh vang và rõ ràng hơn mà không cần tốn nhiều sức. Âm 'ng' giúp đẩy âm thanh về phía trước mặt (mask resonance).",
    exercises: [
      "1. Nói từ 'Vang' và ngân dài âm cuối 'nggggggg'.",
      "2. Cảm nhận độ rung ở mũi và môi trên.",
      "3. Chuyển từ 'ng' sang âm 'a': 'ngggggg-aaaaaaaa'. Cố gắng giữ nguyên độ vang."
    ],
    task: "Ghi âm lại quá trình từ âm 'ng' chuyển sang 'a' và nghe độ rền của âm thanh."
  },
  {
    day: 5,
    title: "Ngày 5: Chest Voice - Tìm Kiếm Âm Khu Ngực",
    theory: "Chest Voice (giọng ngực) mang lại sự ấm áp, uy quyền và đáng tin cậy. Đàn ông hay phụ nữ đều cần phát triển giọng ngực để nói trước đám đông.",
    exercises: [
      "1. Đặt một tay lên giữa ngực.",
      "2. Nói các âm 'Hố, Hố, Hố' với cao độ thấp. Bạn phải cảm nhận được lồng ngực rung lên.",
      "3. Đọc một câu chậm rãi, trầm ấm: 'Tôi đang làm chủ giọng nói của mình'."
    ],
    task: "Ghi âm câu trên với tone giọng thấp nhất bạn có thể phát ra một cách thoải mái."
  },
  {
    day: 6,
    title: "Ngày 6: Mở Khẩu Hình - Bài Tập Ngáp (Yawn-Sigh)",
    theory: "Không gian trong miệng càng rộng, âm thanh càng tròn trịa. Kỹ thuật Ngáp giúp hạ thấp thanh quản và mở rộng vòm họng một cách tự nhiên.",
    exercises: [
      "1. Bắt chước một cái ngáp thật to, cảm nhận cuống lưỡi hạ xuống và vòm họng mở ra.",
      "2. Giữ nguyên trạng thái họng đó và thở ra một tiếng thở dài 'Haaaaah'.",
      "3. Vừa ngáp vừa nói: 'Xin chàooooo'."
    ],
    task: "Lặp lại bài tập 5 lần để tạo thói quen mở họng khi nói."
  },
  {
    day: 7,
    title: "Ngày 7: Đánh Giá & Thực Hành Ghi Âm Tuần 1",
    theory: "Bạn đã hoàn thành tuần đầu tiên! Tuần này chủ yếu là khởi động và nhận thức về giọng nói. Hãy kiểm tra lại sự tiến bộ của bạn.",
    exercises: [
      "1. Dành 2 phút làm lại các bài: Hít sâu, Rung môi, Ngáp mở họng.",
      "2. Chọn một đoạn văn bạn yêu thích hoặc một đoạn giới thiệu bản thân.",
      "3. Kết hợp tư thế thẳng, lấy hơi bụng và nói một cách vang dội nhất."
    ],
    task: "Sử dụng tính năng ghi âm bên dưới để thu âm đoạn văn trên và lưu lại để so sánh ở cuối chu kỳ 60 ngày."
  }
];

// Sinh dữ liệu rỗng cho 53 ngày còn lại
for (let i = 8; i <= 60; i++) {
  lessonsData.push({
    day: i,
    title: `Ngày ${i}: Đang cập nhật nội dung...`,
    theory: "Nội dung bài học của ngày này đang được biên soạn và sẽ sớm ra mắt.",
    exercises: [
      "1. Hãy ôn lại các bài tập của tuần trước.",
      "2. Luôn chú ý vào hơi thở và tư thế."
    ],
    task: "Tiếp tục thực hành ghi âm và cảm nhận sự thay đổi."
  });
}
