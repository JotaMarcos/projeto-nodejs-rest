**Rest com NodeJS: API com Express e MySQL**

- Aprender a criar API REST.
- Usar o MySQL para salvar os nossos dados.
- Usar o Express para criar um servidor.
- Aprender a manipular datas com MomentJS.
- Validar os dados antes de enviar para o banco de dados.
- Enviar erros descritivos para o seu usuário.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

Baixar e realizar a instalação do Node.JS e do Postman

NodeJS: https://nodejs.org/pt-br/

Postman: https://www.postman.com/downloads/?utm_source=postman-home

Para verificar que o nodejs foi instalado digite o seguinte comando:

$ node - -version ou node -v

Para verificar se o npm que é um gerenciador de pacotes para o Node.JS foi instalado digite o seguinte comando:

$ npm --version ou npm -v

-------------------------------------------------------------------------------------------------------------------------------------------

Para inicializar o projeto com o npm digite o seguinte comando:
$ npm init

Para consultar os pacotes do Express acesso o portal:

https://www.npmjs.com/package/express

Para instalar os pacotes do Express acesse o terminal e digite o seguinte comando:

$ npm install express

-------------------------------------------------------------------------------------------------------------------------------------------

Depois de criar o arquivo index.js com todas as principais rotas para executar o projeto basta digitar no terminal o comando: 

$ node index.js

Ou, pode ser instalado e configurado para criar a rota e realizar o reset automático pelo nodemon.

Para instalar o nodemon digite o seguinte comando no terminal:

$ npm install --save-dev nodemon

Depois de finalizar a instalação acesso o arquivo package.json e adicione no módulo de "scrpits"  acima da configuração test adicione a seguinte linha:

"scripts": {

  "start": "nodemon index.js",

  "test": "echo \"Error: no test specified\" && exit 1"

 },

Já no terminal basta digitar o seguinte comando: 

$ npm start

Pronto! Agora todas as alterações feitas em nosso projeto assim que forem salvas o servidor irá reiniciar e as alterações irão subir automaticamente.

-----------------------------------------------------------------------------------------------------------

- Iniciamos um novo projeto node;

- Criamos uma rota com express;

- Adicionamos o nodemon para inicializar o nosso servidor e reiniciar o servidor automaticamente a qualquer alteração.

  

-------------------------------- Agora vamos codar e boa sorte na sua jornada! \o/ --------------------------------

