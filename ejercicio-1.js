// Consumo de una API y Procesamiento de Datos
// =============================================================================
// autor: David Jose Rodriguez Menjivar
// =============================================================================
// Descripción:
// Utilice fetch para obtener una lista de usuarios desde la API pública de
// JSONPlaceholder. Luego, procese los datos para extraer y mostrar en la consola los
// nombres y correos electrónicos de los usuarios.
// =============================================================================
// Instrucciones:
// 1. Haga una petición GET a https://jsonplaceholder.typicode.com/users
// Utilizando fetch.
// 2. Convierte la respuesta en formato JSON.
// 3. Utilice un ciclo (for o forEach) para iterar sobre los usuarios.
// 4. Por cada usuario, muestra en la consola su nombre y correo electrónico.
// 5. Maneja posibles errores Utilizando .catch() o un bloque try...catch si usa
// async/await.
// =============================================================================
// Ejemplo de salida:
// Nombre: Leanne Graham, Email: Sincere@april.biz
// Nombre: Ervin Howell, Email: Shanna@melissa.tv

// 1. Haga una petición GET a https://jsonplaceholder.typicode.com/users
// Utilizando fetch.

fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json()) 
.then(data => {
    data.forEach(user => {
        console.log(`Nombre: ${user.name}, Email: ${user.email}`);
    });
})
.catch(error => console.error('Error:', error));
