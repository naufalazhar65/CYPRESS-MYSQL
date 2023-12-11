const { defineConfig } = require("cypress");
const mysql = require("mysql2");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        queryDb: (query) => {
          return queryTestDb(query, config);
        },
      });
    },
    env: {
      db: {
        server: "127.0.0.1",
        user: "root",
        password: "",
        database: "belajar_mysql",
        port: "3306",
      },
    },
  },
});

function queryTestDb(query, config) {
  const connection = mysql.createConnection(config.env.db);
  connection.connect();

  return new Promise((resolve, reject) => {
    connection.query(query, (error, result) => {
      if (error) reject(error);
      else {
        connection.end();
        return resolve(result);
      }
    });
  });
}
