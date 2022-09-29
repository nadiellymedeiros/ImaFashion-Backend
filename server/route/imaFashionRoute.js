const express = require("express");
const router = express.Router();
const imaFashionService = require("../service/imaFashionService");
const { v4: uuidv4 } = require("uuid");

const shoppingCar = [];

router.post("/carrinhodecompras", async function (req, res) {
  const novoProduto = req.body;

  const produto = await imaFashionService.getProduto(novoProduto.code);

  if (produto) {
    return res.status(400).send("Produto já existe");
  } else {
    imaFashionService.insertProduto(novoProduto);

    res.setHeader("Access-Control-Allow-Origin", "*");
    let produtos = await imaFashionService.getProdutos();
    res.json(produtos);
  }
});

router.get("/carrinhodecompras", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  let produtos = await imaFashionService.getProdutos();
  res.json(produtos);
});

router.get("/carrinhodecompras/:code", async function (req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  const code = req.params.code;
  const findProduct = await imaFashionService.getProduto(code);
  res.json(findProduct);
});

router.put("/carrinhodecompras/addProduct/:code", async (req, res) => {
  const code = req.params.code;

  const findProduct = await imaFashionService.getProduto(code);
  findProduct.quantity++;

  imaFashionService.updateProduto(findProduct);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(findProduct);
});

router.put("/carrinhodecompras/removeProduct/:code", async (req, res) => {
  const code = req.params.code;

  const findProduct = await imaFashionService.getProduto(code);
  if (findProduct.quantity > 1) {
    findProduct.quantity--;
  }

  imaFashionService.updateProduto(findProduct);

  res.setHeader("Access-Control-Allow-Origin", "*");
  res.json(findProduct);
});

router.delete("/carrinhodecompras/:code", (req, res) => {
  const code = req.params.code;

  imaFashionService.deleteProduto(code);

  return res.status(200).send("Produto removido com sucesso!");
});

module.exports = router;
