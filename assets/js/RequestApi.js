
export function fazerRegistro(inputEmail, inputSenha, inputNome, submitButton) {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        submitButton.textContent = 'Carregando...'
        fetch("https://devfront.vize.solutions/api/authaccount/registration", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: inputNome.value,
                email: inputEmail.value,
                password: inputSenha.value
            })
        }).then(response => response.json())
            .then((data) => {
                if (data.code === 0) {
                    const token = data.data.token;
                    sessionStorage.setItem('token', token);
                    sucessHandler(submitButton, token);
                }
                else if (data.code === 1) {
                    emailExistente(submitButton);
                }
                else if (data.message = "The request is invalid.") {
                    campoBranco(submitButton);
                }
                else if (data.response === 401){
                    location.href = "./logar.html"
                }
            }).catch((error)=>{location.href = "./logar.html"
                console.log(error);
        } 
            )
    }
    )
}


export function fazerLogin(inputEmail, inputSenha, submitButton) {
    submitButton.addEventListener('click', (event) => {
        event.preventDefault();
        submitButton.textContent = 'Carregando...'
        fetch("https://devfront.vize.solutions/api/authaccount/login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: inputEmail.value,
                password: inputSenha.value,
            })
        }).then(response => response.json())
            .then(data => {
                if (data.code === 0) { //sucesso
                    const token = data.data.Token;
                    sessionStorage.setItem('token', token);                    
                    sucessHandler(submitButton);                   
                } else if (data.code === 1) {
                    errorLogin(submitButton);
                } else if (data.message = "The request is invalid.") {
                    campoBranco(submitButton);
                }
            })
    }
    )
}

export function listarDados(token) {
    fetch("https://devfront.vize.solutions/api/users?page=1", {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    }).then(response => response.json())
        .then(data => {
            console.log(data);
            const id = document.querySelector("#fill__id")
            const nome = document.querySelector("#fill__nome")
            data.data.map(item => {
                const tr = document.createElement('tr');
                const trnome= document.createElement('tr')
                tr.setAttribute('class', 'tabela__api--id')
                tr.innerHTML = item.id;
                id.appendChild(tr);
                trnome.setAttribute('class', 'tabela__api--nome')
                trnome.innerHTML = item.name;
                nome.appendChild(trnome)
            })
        }).catch(error => {
            location.href = "./logar.html"
            console.log(error);

        })
}

function sucessHandler(submitButton) {
    submitButton.classList.add('sucesso');
    submitButton.classList.remove('error')
    submitButton.textContent = 'Seja bem vindo!';
    location.href = "./area.html"
}

function errorLogin(submitButton) {
    submitButton.classList.add('error');
    submitButton.classList.remove('sucesso');
    submitButton.textContent = 'Vize informa: Usuário ou Login errado';
}

function campoBranco(submitButton) {
    submitButton.classList.add('error');
    submitButton.classList.remove('sucesso');
    submitButton.textContent = 'Vize informa: Todos os campos devem ser preenchidos corretamente';
}

function emailExistente(submitButton) {
    submitButton.classList.add('error');
    submitButton.classList.remove('sucesso');
    submitButton.textContent = 'Vize informa: o email já foi cadastrado';
}


