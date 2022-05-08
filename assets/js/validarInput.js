const tiposDeErro=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensagemDeErro ={
    usuario:{
        valueMissing:"O campo Usuario não pode estar vazio",
        typeMismatch:"O usuario digitado não é válido"
    },
    senha:{
        valueMissing:"O campo de Senha não pode estar vazio"
    },
    nome:{
        valueMissing: "O Campo Nome não pode estar vazio"
    }
}

function mostraMensagemDeErro(tipoDeInput, input){
    let mensagem = '';
    tiposDeErro.forEach(erro =>{
        if(input.validity[erro]){
            mensagem = mensagemDeErro[tipoDeInput][erro]
        }
    })
    return mensagem;
}

export function validaInput(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
       input.parentElement.classList.remove('input__container--invalido');
       input.parentElement.querySelector(".input__mensagem--erro").innerHTML = '';
    }else{
        input.parentElement.classList.add('input__container--invalido');
        input.parentElement.querySelector(".input__mensagem--erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
    }