// Gestión de Tareas Pendientes
// =============================================================================
// autor: David Jose Rodriguez Menjivar
// =============================================================================
// Descripción:
// Desarrolla una pequeña aplicación que gestione una lista de tareas. Cada tarea tiene
// una descripción y un estado de completado. Implementa funcionalidades para
// agregar tareas, marcarlas como completadas y listar las tareas pendientes y
// completadas.
// =============================================================================
// Instrucciones:
// 1. Cree un array tareas para almacenar las tareas.
// 2. Define funciones para:
// o Agregar una tarea: Agrega un objeto al array con descripcion y
// completada (inicialmente false).
// o Marcar una tarea como completada: Cambia el estado de
// completada a true para una tarea específica.
// o Listar tareas pendientes: Muestra las tareas que no están
// completadas.
// o Listar tareas completadas: Muestra las tareas que están
// completadas.
// 3. Agrega algunas tareas Utilizando la función de agregar.
// 4. Marca algunas tareas como completadas.
// 5. Lista las tareas pendientes y completadas.
// =============================================================================
// Ejemplo de uso de funciones:
// // Agregar tareas
// agregarTarea("Comprar leche");
// agregarTarea("Llamar al médico");
// agregarTarea("Estudiar JavaScript");
// // Marcar tareas como completadas
// marcarTareaComoCompletada("Comprar leche");
// // Listar tareas
// listarTareasPendientes();
// listarTareasCompletadas();

const tareas = [];

function agregarTarea(descripcion) {
    tareas.push({ descripcion, completada: false });
}

function completarTarea(descripcion) {
    const tarea = tareas.find(tarea => tarea.descripcion === descripcion);
    if (tarea) {
        tarea.completada = true;
    }
}

function listarTareasPendientes() {
    const tareasPendientes = tareas.filter(tarea => !tarea.completada);
    console.log("Tareas pendientes:");
    tareasPendientes.forEach(tarea => console.log(tarea.descripcion));
}

function listarTareasCompletadas() {
    const tareasCompletadas = tareas.filter(tarea => tarea.completada);
    console.log("Tareas completadas:");
    tareasCompletadas.forEach(tarea => console.log(tarea.descripcion));
}

agregarTarea("Estudiar PHP");
agregarTarea("Estudiar Python");
agregarTarea("Estudiar JavaScript");
agregarTarea("Estudiar TypeScript");

completarTarea("Estudiar TypeScript");
completarTarea("Estudiar PHP");

listarTareasPendientes();
listarTareasCompletadas();

