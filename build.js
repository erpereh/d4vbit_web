const fs = require('fs');
const path = require('path');

const DIST_DIR = path.join(__dirname, 'dist');
const SOURCE_INDEX = path.join(__dirname, 'index.html');

console.log('Iniciando build...');

// 1. Limpiar/Crear directorio dist
if (fs.existsSync(DIST_DIR)) {
    fs.rmSync(DIST_DIR, { recursive: true, force: true });
}
fs.mkdirSync(DIST_DIR);

// 2. Copiar Assets (Archivos estáticos)
try {
    // Copiar script.js
    if (fs.existsSync(path.join(__dirname, 'script.js'))) {
        fs.copyFileSync(path.join(__dirname, 'script.js'), path.join(DIST_DIR, 'script.js'));
    }

    // Copiar carpeta recursos
    if (fs.existsSync(path.join(__dirname, 'recursos'))) {
        fs.cpSync(path.join(__dirname, 'recursos'), path.join(DIST_DIR, 'recursos'), { recursive: true });
    }
} catch (e) {
    console.error('Error copiando assets:', e);
}

// 3. Construir HTML (Procesar Includes)
try {
    const content = fs.readFileSync(SOURCE_INDEX, 'utf8');
    const includePattern = /<!--#include\s+file="([^"]+)"\s*-->/g;

    const processIncludes = (htmlContent) => {
        return htmlContent.replace(includePattern, (match, includePath) => {
            try {
                const fullIncludePath = path.join(__dirname, includePath);
                if (fs.existsSync(fullIncludePath)) {
                    return fs.readFileSync(fullIncludePath, 'utf8');
                } else {
                    console.error(`Include no encontrado: ${fullIncludePath}`);
                    return '';
                }
            } catch (e) {
                console.error(`Error leyendo include ${includePath}: ${e.message}`);
                return '';
            }
        });
    };

    let processedContent = content;
    let maxDepth = 5;
    let previousContent = '';

    while (processedContent !== previousContent && maxDepth > 0) {
        previousContent = processedContent;
        processedContent = processIncludes(processedContent);
        maxDepth--;
    }

    fs.writeFileSync(path.join(DIST_DIR, 'index.html'), processedContent);
    console.log('Build completado con éxito. Salida en el directorio: /dist');

} catch (e) {
    console.error('Error procesando HTML:', e);
    process.exit(1);
}
