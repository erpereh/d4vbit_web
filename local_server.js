const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const BASE_DIR = __dirname; // Directorio actual

const mimeTypes = {
    '.html': 'text/html',
    '.css': 'text/css',
    '.js': 'text/javascript',
    '.json': 'application/json',
    '.png': 'image/png',
    '.jpg': 'image/jpeg',
    '.gif': 'image/gif',
    '.svg': 'image/svg+xml',
    '.ico': 'image/x-icon',
    '.pdf': 'application/pdf'
};

const server = http.createServer((req, res) => {
    console.log(`Petición: ${req.url}`);

    let filePath = req.url === '/' ? 'index.html' : req.url;
    // Eliminar query strings
    filePath = filePath.split('?')[0];

    // Seguridad: prevenir directory traversal
    const safePath = path.normalize(filePath).replace(/^(\.\.[\/\\])+/, '');
    const absolutePath = path.join(BASE_DIR, safePath);

    const extname = path.extname(absolutePath);
    const contentType = mimeTypes[extname] || 'application/octet-stream';

    // Manejo especial para archivos HTML para procesar includes SSI
    if (extname === '.html' || req.url === '/') {
        fs.readFile(path.join(BASE_DIR, 'index.html'), 'utf8', (err, content) => {
            if (err) {
                if (err.code === 'ENOENT') {
                    res.writeHead(404);
                    res.end('Archivo no encontrado');
                } else {
                    res.writeHead(500);
                    res.end('Error del servidor: ' + err.code);
                }
            } else {
                // Procesar includes
                // Regex para encontrar <!--#include file="..." -->
                const includePattern = /<!--#include\s+file="([^"]+)"\s*-->/g;

                const processIncludes = (htmlContent) => {
                    return htmlContent.replace(includePattern, (match, includePath) => {
                        try {
                            const fullIncludePath = path.join(BASE_DIR, includePath);
                            // Leer módulo síncronamente para simplificar la lógica de este servidor de desarrollo
                            if (fs.existsSync(fullIncludePath)) {
                                return fs.readFileSync(fullIncludePath, 'utf8');
                            } else {
                                console.error(`Include no encontrado: ${fullIncludePath}`);
                                return `<!-- Error: No se pudo encontrar ${includePath} -->`;
                            }
                        } catch (e) {
                            console.error(`Error leyendo include ${includePath}: ${e.message}`);
                            return `<!-- Error procesando ${includePath} -->`;
                        }
                    });
                };

                // Podríamos necesitar includes recursivos si las secciones incluyen otras cosas,
                // por ahora, un nivel o un bucle simple está bien.
                // Hacemos una pasada simple. Si necesitamos includes profundos, recursaríamos.
                let processedContent = content;
                // Hack simple para includes anidados: ejecutar un par de veces hasta que no haya cambios
                let previousContent = '';
                let maxDepth = 5;
                while (processedContent !== previousContent && maxDepth > 0) {
                    previousContent = processedContent;
                    processedContent = processIncludes(processedContent);
                    maxDepth--;
                }

                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(processedContent);
            }
        });
        return; // Manejado
    }

    // Servir archivos estáticos
    fs.readFile(absolutePath, (err, content) => {
        if (err) {
            if (err.code === 'ENOENT') {
                res.writeHead(404);
                res.end('Archivo no encontrado');
            } else {
                res.writeHead(500);
                res.end(`Error del servidor: ${err.code}`);
            }
        } else {
            res.writeHead(200, { 'Content-Type': contentType });
            res.end(content);
        }
    });
});

server.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}/`);
    console.log('Sirviendo con soporte dinámico SSI.');
});
