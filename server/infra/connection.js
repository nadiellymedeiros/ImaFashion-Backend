const pg = require("pg-promise")();
const db = pg({
  user: "tweaturp",
  password: "g7xLzG_ELkjzRAWemFdaG6bXYqQnFZUV",
  host: "babar.db.elephantsql.com",
  port: "5432",
  database: "tweaturp",
});

module.exports = db;
