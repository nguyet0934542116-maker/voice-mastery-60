const fs = require('fs');

async function createAndDownloadPPTX() {
  const apiKey = 'sk-gamma-RF7h31tyhHRuBhdnpRqB0Vi4Nbgbh6mbkciMTy2IOw';
  const mdPath = 'C:\\Users\\strom\\.gemini\\antigravity\\brain\\dec810f4-ffb9-47e3-9832-69f8096b583a\\gamma_presentation.md';
  
  // Read and clean the markdown (remove local images since Gamma API can't fetch C:\ paths)
  let mdContent = fs.readFileSync(mdPath, 'utf8');
  mdContent = mdContent.replace(/!\[.*?\]\(C:\\.*?\)/g, '');

  const payload = {
    inputText: mdContent,
    format: 'presentation',
    exportAs: 'pptx',
    textMode: 'preserve'
  };

  try {
    console.log("Generating PPTX presentation via Gamma API...");
    const response = await fetch('https://public-api.gamma.app/v1.0/generations', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-API-KEY': apiKey
      },
      body: JSON.stringify(payload)
    });

    const data = await response.json();
    if (!data.generationId) {
        console.error("Failed to start generation:", data);
        return;
    }
    
    const id = data.generationId;
    console.log(`Generation ID: ${id}`);
    
    let status = 'pending';
    let exportUrl = null;
    while (status !== 'completed' && status !== 'failed') {
        await new Promise(r => setTimeout(r, 5000));
        const res = await fetch(`https://public-api.gamma.app/v1.0/generations/${id}`, {
            headers: { 'X-API-KEY': apiKey }
        });
        const pollData = await res.json();
        status = pollData.status;
        console.log(`Status: ${status}`);
        if (status === 'completed') {
            exportUrl = pollData.exportUrl;
        } else if (status === 'failed') {
            console.error("Failed:", pollData);
            return;
        }
    }

    if (exportUrl) {
        console.log(`Downloading PPTX from ${exportUrl}...`);
        const fileRes = await fetch(exportUrl);
        const buffer = await fileRes.arrayBuffer();
        const outputPath = 'C:\\Users\\strom\\OneDrive\\Desktop\\clawagent-main (2)\\clawagent-main\\voice-mastery-app\\Voice_Mastery_60.pptx';
        fs.writeFileSync(outputPath, Buffer.from(buffer));
        console.log(`✅ Saved successfully to: ${outputPath}`);
    } else {
        console.error("No exportUrl found in completed response!");
    }
  } catch (error) {
    console.error('Error:', error);
  }
}

createAndDownloadPPTX();
