import readline from 'readline/promises';
import { stdin as input, stdout as output } from 'process';

const rl = readline.createInterface({ input, output });
// 🚫 No eliminar las líneas de arriba

const systemName: string = "Sistema Rincon del Sabor";
const version: number = 1.0;
const userName: string = "Natanael";

const separador: string = "=".repeat(35);

console.log(separador);
console.log("  " + systemName + "  v" + version);
console.log("  ¡Bienvenido, " + userName + "!");
console.log("  Próxima versión: v" + (version + 0.1).toFixed(1));
console.log(separador);

const tasks: string[] = [];
let running: boolean = true;

while (running) {
  console.log("\n=== Menú de tareas ===");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Salir");

  const opcion = await rl.question("Elegí una opción: ");

  if (opcion === "1") {
    const titulo = await rl.question("Título de la tarea: ");
    tasks.push(titulo);
    console.log(`Tarea agregada: "${titulo}"`);
  } else if (opcion === "2") {
    const eliminada = tasks.pop();
    if (eliminada) {
      console.log(`Tarea eliminada: "${eliminada}"`);
    } else {
      console.log("No hay tareas para eliminar.");
    }
  } else if (opcion === "3") {
    if (tasks.length === 0) {
      console.log("No hay tareas cargadas.");
    } else {
      for (let i = 0; i < tasks.length; i++) {
        console.log(`${i + 1}. ${tasks[i]}`);
      }
    }
  } else if (opcion === "4") {
    console.log("Saliendo...");
    running = false;
  } else {
    console.log("Opción inválida, intentá de nuevo.");
  }
}

// 🚫 No eliminar las líneas de abajo
rl.close()