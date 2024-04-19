const inputTexto = document.querySelector("[input-texto]")
const divContador = document.querySelector("[txt-contador]")
const btnContar = document.querySelector("[btn-contar]")
let modo = "caracteres"


function handleBtnContar(evento) {
    if (modo === "caracteres") {
        modo = "palavras"
        btnContar.innerText = "Contar Caracteres"
    } else {
        modo == "caracteres"
        btnContar.innerText = "Contar Palavras"
    }
    handleInputTexto()
}

function handleInputTexto() {
    if (modo === "caracteres") {
        divContador.innerText = ` ${inputTexto.value.length} caracteres`;
    } else if (modo === "palavras") {
        const palavras = inputTexto.value.split(" ").length;
        divContador.innerText = `${palavras} Palavras`;}  
}

inputTexto.addEventListener("input", handleInputTexto)
btnContar.addEventListener("click", handleBtnContar)
