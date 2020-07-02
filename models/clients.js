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

module.exports.selectAll = selectAll;
module.exports.selectClient = selectClient;
