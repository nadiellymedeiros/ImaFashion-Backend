const express = require("express");
const server = express();

const cors = require("cors");
const port = process.env.PORT || 8180;

server.use(cors());

server.use(express.json());
server.use("/", require("./route/imaFashionRoute"));

server.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
