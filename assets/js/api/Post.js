const init = () => {
    const inputEmail = document.querySelector('input[type="email"]');
    const inputSenha = document.querySelector('input[type="password"]');
    const submitButton = document.querySelector("#btn__login");

    if (submitButton) {
        submitButton.addEventListener('click', () => {
            event.preventDefault();

            fetch('http://restapi.adequateshop.com/api/authaccount/login', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer <token>',
                },
                body: JSON.stringify({
                    'email':'inputEmail',
                    'password':'inputSenha'
                })
            }).then((response) => {
                return response.json();
            }).then((data) => {
                console.log(data);
            })
        })
    }
    console.log(inputEmail, inputSenha, submitButton)
}
window.onload = init;