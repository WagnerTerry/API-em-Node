API EM NODE

bibliotecas para instalar

- npm install --save bcrypt //criptografar senha

comandos sql

- para colocar um registro unico de email
  > alter table usuarios add unique (email);
  - nao nulos
    > alter table usuarios modify column email varchar(100) not null;
    > alter table usuarios modify column senha varchar(100) not null;
