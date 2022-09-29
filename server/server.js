const express = require("express");
const server = express();
require("dotenv").config();
const cors = require("cors");
const port = 80;

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL,
});

server.use(cors());

server.use(express.json());
server.use("/", require("./route/imaFashionRoute"));

server.listen(port, () => {
  console.log(`Servidor escutando na porta ${port}`);
});
