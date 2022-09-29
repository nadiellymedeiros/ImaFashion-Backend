const imaFashionData = require("../data/imaFashionData");

exports.insertProduto = function (produto) {
  imaFashionData.insertProduto(produto);
};

exports.updateProduto = function (produto) {
  imaFashionData.updateProduto(produto);
};

exports.getProdutos = function () {
  return imaFashionData.getProdutos();
};

exports.getProduto = async function (id) {
  return await imaFashionData.getProduto(id);
};

exports.deleteProduto = function (code) {
  imaFashionData.deleteProduto(code);
};
