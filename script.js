const inputTexto=document.querySelector("[input-texto]")
const divContador=document.querySelector("[txt-contador]")
const btnContar= document.querySelector("[btn-contar]")
let modo="caracteres"

//inputTexto.addEventListener("input", ()=>(
//    console.log(inputTexto.value)
//) )

function handleInputTexto(evento){
    console.log(inputTexto,value)
    console.log(evento.target.value)
}

function handleBtnContar(evento){
    console.log("click Contar")
}

function handleInputTexto(evento){
    let tamanho = inputTexto.value.length
    console.log(tamanho)
}

function handleBtnContar(evento){
    if (modo==="caracteres"){
        modo="palavras"
        btnContar.innerText="Contar Palavras"
    } else{
        modo=="caracteres"
        btnContar.innerText="Contar Caracteres"
    }
}


inputTexto.addEventListener("input", handleInputTexto)
btnContar.addEventListener("click", handleInputTexto)