const mysql = require("./mysqlpool");

let selectAll = () => {
  return mysql.execute("SELECT * FROM exampleclass.clients;");
};

let selectClient = (id) => {
  return mysql.execute(
    `SELECT * FROM exampleclass.clients WHERE idclients = ?;`,
    [id]
  );
};

let newClient = (name, addr) => {
  return mysql.execute(
    "INSERT INTO exampleclass.clients(name,address) VALUES (?,?);",
    [name, addr]
  );
};

module.exports.selectAll = selectAll;
module.exports.selectClient = selectClient;
module.exports.newClient = newClient;
