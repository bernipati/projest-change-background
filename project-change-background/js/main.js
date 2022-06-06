function changeBackground() {
    const symbols = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color = color + symbols[Math.floor(Math.random() * 16)]     //math es un objeto que pude tener atributo(un valor) y metodo(funcion)

    }

document.body.style.background = color;
document.querySelector("span").innerHTML= color; //.innerHTML es paa cambiar a la nueva valor de la etiqueta span//
}
