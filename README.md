API EM NODE

npm init

- package name: ""
- version - ok
- description
- entry point - index.js
- test comand - ""
- git repository: ""
- keywords: node tutorial
- author - name
- license - ""

bibliotecas para instalar

- npm install
- npm install --save express
- npm install --save-dev nodemon
- npm install --save body-parser
- npm install --save mysql
- npm install --save multer // biblioteca usada para tratar p form-data
- npm install --save bcrypt //criptografar senha
- npm install jsonwebtoken --save
- npm install -g heroku

configurar depois das bibliotecas o app.js e o server.js

comandos sql

- para colocar um registro unico de email
  > alter table usuarios add unique (email);
  - nao nulos
    > alter table usuarios modify column email varchar(100) not null;
    > alter table usuarios modify column senha varchar(100) not null;

\*DEV sem o heroku
