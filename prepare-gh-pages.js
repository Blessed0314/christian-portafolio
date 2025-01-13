import fs from 'fs';
import path from 'path';
import fse from 'fs-extra'; // Asegúrate de haber instalado fs-extra con: npm install fs-extra

const distPath = path.join(process.cwd(), 'dist');
const docsPath = path.join(process.cwd(), 'docs');

// Verifica si existe la carpeta docs y la elimina
if (fs.existsSync(docsPath)) {
  console.log('Eliminando carpeta docs...');
  await fse.remove(docsPath);
}

// Crea la carpeta docs
console.log('Creando carpeta docs...');
fs.mkdirSync(docsPath, { recursive: true });

// Mueve el contenido de browser a docs
console.log(`Moviendo contenido de ${distPath} a ${docsPath}...`);
await fse.copy(distPath, docsPath);

console.log('¡Preparación completada! Ahora puedes subir la carpeta docs a GitHub Pages.');
