import validaInput from "./validacao/validarInput.js";
import mostrarSenha from "./validacao/validarSenha.js";
import { fazerLogin, fazerRegistro, listarDados } from './RequestApi.js';

const init = () => {
    const token = sessionStorage.getItem('token');

    if (document.getElementById('senha')) {
        const tipo = document.getElementById('senha');
        mostrarSenha(tipo);
        const inputs = document.querySelectorAll('input');
        inputs.forEach(input => {
            input.addEventListener('blur', (evento) => {
                validaInput(evento.target)
            })
        })
    }

    if (document.getElementById('btn__registro')) {
        const submitButton = document.getElementById('btn__registro');
        submitButton.addEventListener('click', (evento) => {
            evento.preventDefault();
            location.href = "./registrar.html";
        })
    }

    if (document.querySelector("#btn__login")) {
        const inputEmail = document.getElementById('email');
        const inputSenha = document.getElementById('senha');
        const submitButton = document.querySelector(".botao__login");
        fazerLogin(inputEmail, inputSenha, submitButton);
    }

    if (document.querySelector('#btn__registrar')) {
        const inputEmail = document.getElementById('email');
        const inputSenha = document.getElementById('senha');
        const inputNome = document.getElementById('nome');
        const submitButton = document.querySelector('#btn__registrar');
        fazerRegistro(inputEmail, inputSenha, inputNome, submitButton)/* .then(data => {
        const token = sessionStorage.getItem('token');
        }) *//* .then{
        catch ((errorRegistro(submitButton) => { })) */
    }

    if(document.querySelector('.tabela__usuario')){
        listarDados(token);
    }

    if(token ='Inavlid Token'){
        location.href = "./logar.html"
    }
  
}

window.onload = init;
