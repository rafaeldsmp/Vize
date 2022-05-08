# Objetivo:
Criar uma aplicação conforme conforme o protótipo, contendo 3 telas (“Login”, “Registro” e “Área Logada”), utilizando as tecnologias HTML, CSS e JavaScript, podendo ou não utilizar ReactJS ou outro framework de sua escolha.
Utilize uma biblioteca de componentes e estilo, à sua escolha (MaterialUI, Bootstrap, etc).

# API:
Utilizar a API: https://www.appsloveworld.com/sample-rest-api-url-for-testing-with-authentication, porém com o host “https://devfront.vize.solutions”
Neste aplicativo serão utilizados os seguintes endpoints:
https://devfront.vize.solutions/api/authaccount/registration
https://devfront.vize.solutions/api/authaccount/login
https://devfront.vize.solutions/api/users?page=1

# Requisitos:
Usuário deve ser registrar e autenticar utilizando a API acima, utilizando os endpoints “api/authaccount/registration” e “api/authaccount/login”
Após o login, deve ser apresentado na tela uma tabela contendo o resultado da requisição da 1ª página de usuários (endpoint “api/users”). Apresentar somente os valores Id e Nome.
Campo Senha: Ao clicar no ícone do campo, a visualização da senha deve ser alternada entre caracteres legíveis e caracteres ilegíveis (de senha).
Ao clicar no botão Login, com os campos usuário e senha preenchidos corretamente, deve redirecionar para a tela logada. Caso os campos não sejam preenchidos, ou a API retorne algo diferente de sucesso, o resultado deve ser apresentado de forma legível para o usuário.
O erro pode ser apresentado ao usuário da forma que desejar, porém escolha uma forma que fique claro para o usuário o motivo do erro. Na falta de uma mensagem legível, pode-se utilizar uma mensagem genérica.
Ao acessar a tela de “Área Logada” sem ter digitado as credenciais, o usuário deve ser redirecionado para a tela de login.
Ao acessar ou atualizar a tela de “Área Logada”, a requisição deve ser refeita, aproveitando a “sessão logada” anteriormente.

# Forma de entrega:
Enviar o link do repositório GitHub, ou outro repositório Git, contendo o código e instruções para simulação no arquivo README, para o e-mail contato@vize.solutions com o assunto “Vize - Vaga Dev FrontEnd Jr”.

# Considerações:
Este teste será utilizado para medir seus conhecimentos quanto à organização de código, legibilidade de código e organização das ideias.
Caso o tempo não dê para finalizar, pode ser entregue incompleto, porém indique no arquivo README o que ficou faltando e quais seriam suas atividades para finalização completa do projeto.