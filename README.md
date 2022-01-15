# **Rest com NodeJS: API com Express e MySQL**

- Aprender a criar API REST.
- Usar o MySQL para salvar os nossos dados.
- Usar o Express para criar um servidor.
- Aprender a manipular datas com MomentJS.
- Validar os dados antes de enviar para o banco de dados.
- Enviar erros descritivos para o seu usuário.

-----------------------------------------------------------------------------------------------------------------------------------------------------------

## Baixar e realizar a instalação do Node.JS e do Postman:

NodeJS: https://nodejs.org/pt-br/

Postman: https://www.postman.com/downloads/?utm_source=postman-home

Para verificar que o nodejs foi instalado digite o seguinte comando:

`$ node - -version ou node -v`

Para verificar se o npm que é um gerenciador de pacotes para o Node.JS foi instalado digite o seguinte comando:

`$ npm --version ou npm -v`

-------------------------------------------------------------------------------------------------------------------------------------------

Para inicializar o projeto com o npm digite o seguinte comando:
`$ npm init`

Para consultar os pacotes do Express acesso o portal:

https://www.npmjs.com/package/express

Para instalar os pacotes do Express acesse o terminal e digite o seguinte comando:

`$ npm install express`

-------------------------------------------------------------------------------------------------------------------------------------------

Depois de criar o arquivo index.js com todas as principais rotas para executar o projeto basta digitar no terminal o comando: 

`$ node index.js`

Ou, pode ser instalado e configurado para criar a rota e realizar o reset automático pelo nodemon.

Para instalar o nodemon digite o seguinte comando no terminal:

`$ npm install --save-dev nodemon`

Depois de finalizar a instalação acesso o arquivo package.json e adicione no módulo de "scrpits"  acima da configuração test adicione a seguinte linha:

` "scripts": {  "start": "nodemon index.js", "test": "echo \"Error: no test specified\" && exit 1"},`

----------------------------------------------------------------------------------------------------------------------------------------------------------------

Para instalar o Consign digite o comando no terminal:

`$ npm install consign`

Já para instalar o body-parser digite o seguinte comando no terminal:

`$ npm install body-parser`



----------------------------------------------------------------------------------------------------------------------------------------------------------------

Já no terminal basta digitar o seguinte comando: 

`$ npm start`

Pronto! Agora todas as alterações feitas em nosso projeto assim que forem salvas o servidor irá reiniciar e as alterações irão subir automaticamente.

----------------------------------------------------------------------------------------------------------------------------------------------------------------

## Instalando e Configurando o MySQL: 

Usaremos o **MySQL** neste curso, e o primeiro passo é [baixar a ferramenta acessando este endereço](https://www.mysql.com/downloads/).

Nesta página, encontraremos o link ["MySQL Community (GPL) Downloads" acessível aqui](https://dev.mysql.com/downloads/), onde clicaremos e baixaremos a versão gratuita para o sistema operacional que estivermos usando, que em nossas aulas será o **Windows**.

Na lista de itens, clicaremos em "MySQL installer for Windows" e acessaremos a [página com o botão de download](https://dev.mysql.com/downloads/installer/) da versão executável que é o instalador de menor tamanho.

Em seguida, bastará clicarmos em "No thanks, just start my download" para iniciarmos, pois não precisamos fazer cadastro para baixar o MySQL e iniciar a instalação.

Enquanto baixamos, ainda temos que instalar o MySQL no NodeJS. Dentro do terminal do nosso projeto no Visual Studio Code, digitaremos `npm install mysql` e executaremos.

O ambiente do banco de dados MySQL pode gerar alguns conflitos de versão e conexão, e alguns erros podem surgir. Para evitar uma maior quantidade de erros no seu projeto, sugerimos que você substitua o driver pelo `mysql2`, executando no seu terminal, no interior da pasta raiz do projeto, o seguinte comando:

`$ npm install mysql2`

Também é necessário substituir as linhas de importação por:

`const mysql = require('mysql2');`

No Postman, adicionaremos o campo "data", e inseriremos algum dia qualquer no formato `dd/mm/aaaa`, então enviaremos a informação. No console verificaremos a existência de um erro, alegando que a data que inserimos está inválida.

Precisaremos converter a nossa data para um formato específico, aquele usado em nossa base de dados. Para tanto, utilizaremos uma biblioteca `moment`, que manipulará as datas e as formatará.

Para instalar a biblioteca moment digite o seguinte comando no terminal:

`$ npm install moment`

-----------------------------------------------------------------------------------------------------------

## Resumo das atividades realizadas no projeto:

- Iniciamos um novo projeto node;

- Criamos uma rota com express;

- Adicionamos o nodemon para inicializar o nosso servidor e reiniciar o servidor automaticamente a qualquer alteração.

- Configuramos o express e isolamos essa configuração;

- Criamos uma rota POST para criar um novo atendimento e consumir essa rota usando o Postman;

- Usamos `body-parser` para conseguir ler os dados que estamos recebendo no `body`.

- Conectamos nosso servidor com o mysql;

- Criamos tabelas no mysql usando um script node;

- Salvamos o nosso atendimento no banco de dados.

  

#### -------------------------------- Agora vamos codar e boa sorte na sua jornada! \o/ --------------------------------

