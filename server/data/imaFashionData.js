const db = require("../infra/connection");

exports.insertProduto = function (produto) {
  db.none(
    "INSERT INTO produtos_pedido (produtos_id_pedido, name, code, price, quantity, size) VALUES (1001, $1, $2, $3, $4, $5)",
    [produto.name, produto.code, produto.price, produto.quantity, produto.size]
  );
};

exports.updateProduto = function (produto) {
  db.none("UPDATE produtos_pedido SET quantity = $1 WHERE code = $2", [
    produto.quantity,
    produto.code,
  ]);
};

exports.getProdutos = function () {
  return db.query("SELECT * FROM produtos_pedido");
};

exports.getProduto = function (code) {
  return db.oneOrNone("SELECT * FROM produtos_pedido WHERE code = $1", [code]);
};

exports.deleteProduto = function (code) {
  db.none("DELETE FROM produtos_pedido WHERE code = $1", [code]);
};
