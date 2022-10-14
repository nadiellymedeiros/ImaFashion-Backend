const accountSid = "ACfca2bdb4587161b674bea132b2bdab3d";
const authToken = "fad3ae3a622bad74a9f5335e6622345b";
const client = require("twilio")(accountSid, authToken);

exports.mandarMensagem = (body) => {
  return client.messages.create({
    body: "Seu pedido foi conluído com sucesso. Número do pedido: 1001. Detalhes: http://www.imafashion.com/pedido1001",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+556292351525",
  });
};
