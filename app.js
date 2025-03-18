
let amigos = [];


function agregarNombre() {
 
    let input = document.getElementById("amigo");
    let nombre = input.value.trim(); // Eliminar los espacios en blanco


    if (nombre === "") {
        alert("Por favor, ingresa un nombre válido.");
        return;
    }


    amigos.push(nombre);


    input.value = "";


    actualizarLista();
}


function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = ""; // Limpiar la lista antes de actualizarla


    amigos.forEach(function(nombre) {
        let li = document.createElement("li");
        li.textContent = nombre;
        lista.appendChild(li);
    });
}


function sortearAmigo() {
    // Verificar si hay amigos en la lista
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    let amigoSecreto = amigos[indiceAleatorio];

    // Mostrar el resultado del sorteo
    document.getElementById("resultado").textContent = `🎉 El amigo secreto es: ${amigoSecreto} 🎉`;
