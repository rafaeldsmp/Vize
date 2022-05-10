import validaInput from "./validacao/validarInput.js";
import mostrarSenha from "./validacao/validarSenha.js";
import {fazerLogin, listaRegistro, fazerRegistro} from './api/Post.js';

const init = () => {
listaRegistro();
if(document.getElementById('senha')){
const tipo = document.getElementById('senha');
mostrarSenha(tipo);
const inputs = document.querySelectorAll('input');
    inputs.forEach(input=>{
        input.addEventListener('blur', (evento)=>{
            validaInput(evento.target)
        })
    })
}
}

if(document.getElementById('btn__registro')){
    const submitButton=document.getElementById('btn__registro');
    submitButton.addEventListener('click', (evento)=> {
        evento.preventDefault();
        location.href="./registrar.html";
    })
}

if(document.querySelector("#btn__login")){
    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('senha');
    const submitButton = document.querySelector(".botao__login");
    fazerLogin(inputEmail, inputSenha, submitButton);
}

if(document.querySelector('#btn__registrar')){
    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('senha');
    const inputNome = document.getElementById('nome');
    const submitButton = document.querySelector('#btn__registrar');
    fazerRegistro(inputEmail, inputSenha, inputNome, submitButton);
}
window.onload = init;

