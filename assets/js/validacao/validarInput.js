const tiposDeErro=[
    "valueMissing",
    "typeMismatch",
    "patternMismatch",
    "customError"
]

const mensagemDeErro ={
    email:{
        valueMissing:"Vize informa: O campo Usuario não pode estar vazio",
        typeMismatch:"Vize informa: O usuario digitado não é válido"
    },
    senha:{
        valueMissing:"Vize informa: O campo Senha não pode estar vazio"
    },
    nome:{
        valueMissing: "Vize informa: O Campo Nome não pode estar vazio"
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

export default function validaInput(input){
    const tipoDeInput = input.dataset.tipo;
    if(input.validity.valid){
       input.parentElement.classList.remove('input__container--invalido');
       input.parentElement.querySelector(".input__mensagem--erro").innerHTML = '';
    }else{
        input.parentElement.classList.add('input__container--invalido');
        input.parentElement.querySelector(".input__mensagem--erro").innerHTML = mostraMensagemDeErro(tipoDeInput, input)
    }
    }