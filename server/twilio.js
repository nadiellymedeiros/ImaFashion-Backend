const accountSid = "ACfca2bdb4587161b674bea132b2bdab3d";
const authToken = "a96bf5ba243ad9bafb58c04c1982c8e3";
const client = require("twilio")(accountSid, authToken);

exports.mandarMensagem = (body) => {
  return client.messages.create({
    body: "Seu pedido foi conluído com sucesso. Número do pedido: 1001. Para mais detalhes: http://www.imafashion.com/pedido1001",
    from: "whatsapp:+14155238886",
    to: "whatsapp:+556292351525",
  });
};
