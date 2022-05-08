import { validaInput } from "./validarInput";
import { clicando } from "./click.js";
import { mostrarSenha } from "./validarSenha.js";

const init = () => {
console.log('funcionando');
const tipo = document.getElementById('senha');
mostrarSenha(tipo);

const btn = document.getElementById('btn__registro');
clicando(btn);

const inputs = document.querySelectorAll('input');
    inputs.forEach(input=>{
        input.addEventListener('blur', (evento)=>{
            validaInput(evento.target)
        })
    })
}

window.onload = init;

