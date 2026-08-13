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

interface Task {
  id: number;
  title: string;
  completed: boolean;
}

const tasks: Task[] = [];
let idCounter: number = 1;

const addTask = (title: string): void => {
  const newTask: Task = { id: idCounter, title: title, completed: false };
  tasks.push(newTask);
  idCounter++;
  console.log(`Tarea agregada: "${newTask.title}" (id: ${newTask.id})`);
};

const removeTask = (): void => {
  const eliminada = tasks.pop();
  if (eliminada) {
    console.log(`Tarea eliminada: "${eliminada.title}"`);
  } else {
    console.log("No hay tareas para eliminar.");
  }
};

const markCompleted = (id: number): void => {
  const tarea = tasks.find(t => t.id === id);
  if (tarea) {
    tarea.completed = true;
    console.log(`Tarea "${tarea.title}" marcada como completada.`);
  } else {
    console.log(`No se encontró ninguna tarea con id ${id}.`);
  }
};

const filterPending = (): Task[] => {
  return tasks.filter(t => t.completed === false);
};

const filterCompleted = (): Task[] => {
  return tasks.filter(t => t.completed === true);
};

const listTasks = (): void => {
  if (tasks.length === 0) {
    console.log("No hay tareas cargadas.");
    return;
  }

  const lineas = tasks.map(task => {
    const { id, title, completed } = task;
    const estado = completed ? "completed" : "pending";
    return `[${id}] ${title} - ${estado}`;
  });

  lineas.forEach(linea => console.log(linea));
};

let running: boolean = true;

while (running) {
  console.log("\n=== Menú de tareas ===");
  console.log("1. Agregar tarea");
  console.log("2. Eliminar última tarea");
  console.log("3. Listar tareas");
  console.log("4. Marcar tarea como completada");
  console.log("5. Ver tareas pendientes");
  console.log("6. Ver tareas completadas");
  console.log("7. Salir");

  const opcion = await rl.question("Elegí una opción: ");

  if (opcion === "1") {
    const titulo = await rl.question("Título de la tarea: ");
    addTask(titulo);
  } else if (opcion === "2") {
    removeTask();
  } else if (opcion === "3") {
    listTasks();
  } else if (opcion === "4") {
    const idInput = await rl.question("Id de la tarea a completar: ");
    markCompleted(Number(idInput));
  } else if (opcion === "5") {
    const pendientes = filterPending();
    if (pendientes.length === 0) {
      console.log("No hay tareas pendientes.");
    } else {
      pendientes.forEach(({ id, title }) => console.log(`[${id}] ${title} - pending`));
    }
  } else if (opcion === "6") {
    const completadas = filterCompleted();
    if (completadas.length === 0) {
      console.log("No hay tareas completadas.");
    } else {
      completadas.forEach(({ id, title }) => console.log(`[${id}] ${title} - completed`));
    }
  } else if (opcion === "7") {
    console.log("Saliendo...");
    running = false;
  } else {
    console.log("Opción inválida, intentá de nuevo.");
  }
}

// 🚫 No eliminar las líneas de abajo
rl.close()