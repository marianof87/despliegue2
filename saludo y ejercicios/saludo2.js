"use strict";
function saludar2() {
    const input = document.getElementById("nombre");
    const nombre = input.value;
    const resultado = document.getElementById("resultado");
    resultado.textContent = `Hola, ${nombre}! 👋`;
}
