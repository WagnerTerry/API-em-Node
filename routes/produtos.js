const express = require("express");
const router = express.Router();
const mysql = require("../mysql").pool;
const multer = require("multer"); // usado para o form-data
const login = require("../middleware/login");

const ProdutosController = require("../controllers/produtos-controller");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/"); // cb > callback
  },
  filename: function (req, file, cb) {
    cb(null, new Date().toISOString() + file.originalname);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
    cb(null, true);
  } else {
    cb(null, false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 1024 * 1024 * 5,
  },
  fileFilter: fileFilter,
});

//RETORNA TODOS OS PRODUTOS
router.get("/", ProdutosController.getProdutos);

//INSERE PRODUTOS
router.post(
  "/",
  login.obrigatorio, // middleware
  upload.single("produto_imagem"), // middleware
  ProdutosController.postProduto
);

//RETORNA OS DADOS DE UM PRODUTO
router.get("/:id_produto", ProdutosController.getUmProduto);

//ALTERA UM PRODUTO
router.patch("/", login.obrigatorio, ProdutosController.updateProduto);

//EXCLUI UM PRODUTO
router.delete("/", login.obrigatorio, ProdutosController.deleteProduto);

module.exports = router;
