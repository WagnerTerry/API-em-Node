const express = require("express");
const app = express();
const morgan = require("morgan");
const bodyParser = require("body-parser");

const rotaProdutos = require("./routes/produtos");
const rotaPedidos = require("./routes/pedidos");

app.use(morgan("dev")); // monitora/escuta as rotas 200, 201 etc e diz o metodo GET, POST etc
app.use("/uploads", express.static("uploads"));
app.use(bodyParser.urlencoded({ extended: false })); //apenas dados simples
app.use(bodyParser.json()); //json de entrada no body

app.use((req, res, next) => {
  //informações de cabeçalho
  res.header("Access-Control-Allow-Origin", "*"); // * permite o acesso de todos. Se fosse especifico "http://servidorespecifico.com.br"
  res.header(
    "Access-Control-Allow-Header",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  ); // O que vai aceitar de cabeçalho - HEADER

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, PATCH, DELETE");
    return res.status(200).send({});
  }

  next();
});

app.use("/produtos", rotaProdutos);
app.use("/pedidos", rotaPedidos);

//Quando não encontra a rota
app.use((req, res, next) => {
  const erro = new Error("Não encontrado");
  erro.status = 404;
  next(erro);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  return res.send({
    erro: {
      mensagem: error.message,
    },
  });
});

module.exports = app;
