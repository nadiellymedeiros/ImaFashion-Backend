const accountSid = "AC5912c14af788d66eacc3102dae99c8a8";
const authToken = "3a09f425c4b54eaf899835d69eebe3e7";
const client = require("twilio")(accountSid, authToken);

function mandarMensagem(body) {
  return client.messages.create({
    body,
    from: "+19205161591",
    to: "+5562982520093",
  });
}

// TWILIO_ACCOUNT_SID=AC5912c14af788d66eacc3102dae99c8a8
// TWILIO_AUTH_TOKEN=3a09f425c4b54eaf899835d69eebe3e7
// TWILIO_NUMBER=+19205161591
module.exports = { mandarMensagem };
