
export function fazerRegistro(inputEmail, inputSenha, inputNome, submitButton) {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        submitButton.textContent = 'Carregando...'
        //TODO: tratar os end-points
        fetch("https://devfront.vize.solutions/api/authaccount/registration", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                name: inputNome.value,
                email: inputEmail.value,
                password: inputSenha.value
            })
        }).then(response => {
            if(response.status !== 200){
               return errorRegistro(submitButton);
            }
            sucessHandler();
        }).then((data) => {
            console.log(data);
        }).catch(()=>{
            errorRegistro(submitButton);
        }
    )}
    )
}


export function fazerLogin(inputEmail, inputSenha, submitButton) {
    if (submitButton) {
        submitButton.addEventListener('click', (event) => {
            event.preventDefault();
            submitButton.textContent = 'Carregando...'
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
                if(response.status !== 200){
                   return errorLogin(submitButton);
                }
                sucessHandler(submitButton);
            }).catch(() => {
                errorLogin();
            })
        })
    }
}

export function listaRegistro(){
    fetch("http://restapi.adequateshop.com/api/users?page=1", {
        method: "GET",
        headers: {
            'Content-Type':'application/json',
            'Authorization': 'Bearer <token>'
        }
    }).then((response) => response.JSON())
    .then((data) => console.log(data));
    }



function errorLogin(submitButton){
    submitButton.classList.add('error');
    submitButton.classList.remove('sucesso');
    submitButton.textContent = 'Vize informa: Usuário ou Login errado';
}

function errorRegistro(submitButton){
    submitButton.classList.add('error');
    submitButton.classList.remove('sucesso');
    submitButton.textContent = 'Vize informa: Não foi possível efetuar o Cadastro';
}

function sucessHandler(submitButton){
    submitButton.classList.add('sucesso');
    submitButton.classList.remove('error')
    submitButton.textContent = 'Seja bem vindo!';
    location.href="./area.html"  
}