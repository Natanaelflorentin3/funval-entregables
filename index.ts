import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba ⬆️

// ✍️ Escribe tu código aquí 👇
const systemName: string = "Sistema Rincon del Sabor";
const version: number = 1.0;
const userName: string = "Natanael";

const separador: string = "=".repeat(35);

console.log(separador);
console.log("  " + systemName + "  v" + version);
console.log("  ¡Bienvenido, " + userName + "!");
console.log("  Próxima versión: v" + (version + 0.1).toFixed(1));
console.log(separador);

// 🚫 No eliminar las líneas de abajo ⬇️
rl.close()