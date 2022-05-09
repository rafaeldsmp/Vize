const init = () => {
    //fazerLogin();
    registrarApi();
}

window.onload = init;

function registrarApi() {
    const inputEmail = document.getElementById('email');
    const inputSenha = document.getElementById('senha');
    const inputNome = document.getElementById('nome');
    const submitButton = document.querySelector('#btn__registrar');
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        fetch("http://restapi.adequateshop.com/api/authaccount/registration", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json; charset=utf-8'
            },
            body: JSON.stringify({
                name: inputNome.value,
                email: inputEmail.value,
                password: inputSenha.value
            })
        }).then(async response => {
            return response.json();
        }).then((data) => {
            console.log(data);
        })
    }
    )
    console.log(inputEmail);
    console.log(inputSenha);
    console.log(inputNome);
    console.log(submitButton);
}


function fazerLogin() {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputSenha = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector("#btn__login");
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            fetch("http://restapi.adequateshop.com/api/authaccount/login", {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    email: inputEmail.value,
                    password: inputSenha.value,
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
            })
        })
    }
    console.log(inputEmail, inputSenha, submitButton);
}