const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;

http.createServer((request, response) => {
    let filePath = '.' + request.url;
    if (filePath === './') filePath = './index.html';

    const extname = String(path.extname(filePath)).toLowerCase();
    const mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };

    const contentType = mimeTypes[extname] || 'application/octet-stream';

    fs.readFile(filePath, (error, content) => {
        if (error) {
            if(error.code === 'ENOENT') {
                response.writeHead(404);
                response.end("404 Not Found");
            } else {
                response.writeHead(500);
                response.end('Error: ' + error.code);
            }
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });
}).listen(PORT);

console.log(`Server running at http://localhost:${PORT}/`);
