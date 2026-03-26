const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 8080;
const BASE_DIR = __dirname;

const MIME_TYPES = {
    '.html': 'text/html; charset=utf-8',
    '.js':   'application/javascript; charset=utf-8',
    '.css':  'text/css',
    '.png':  'image/png',
    '.jpg':  'image/jpeg',
    '.ico':  'image/x-icon',
    '.json': 'application/json',
};

http.createServer((req, res) => {
    let filePath = path.join(BASE_DIR, req.url.split('?')[0]);
    if (filePath === BASE_DIR) filePath = path.join(BASE_DIR, 'ProyectoPearlHarbor.html');
    
    const ext = path.extname(filePath);
    const contentType = MIME_TYPES[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err, data) => {
        if (err) {
            res.writeHead(404);
            res.end('Not found: ' + req.url);
            return;
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(data);
    });
}).listen(PORT, () => {
    console.log('');
    console.log('╔═══════════════════════════════════════════╗');
    console.log('║  Naval Intelligence Hub - Server ONLINE    ║');
    console.log('╠═══════════════════════════════════════════╣');
    console.log(`║  Abrir en el navegador:                    ║`);
    console.log(`║  http://localhost:${PORT}/                   ║`);
    console.log('╠═══════════════════════════════════════════╣');
    console.log('║  Ctrl+C para detener el servidor.          ║');
    console.log('╚═══════════════════════════════════════════╝');
});
