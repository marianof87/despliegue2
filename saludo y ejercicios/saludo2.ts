function saludar2(): void {
    const input = document.getElementById("nombre") as HTMLInputElement;
    const nombre = input.value;

    const resultado = document.getElementById("resultado") as HTMLElement;
    resultado.textContent = `Hola, ${nombre}! 👋`;
}

