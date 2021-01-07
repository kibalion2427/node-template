const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node-shop",
  password: "Mejia2427*",
});

module.exports = pool.promise();
