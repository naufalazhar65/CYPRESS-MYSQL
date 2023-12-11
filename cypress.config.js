const { defineConfig } = require("cypress");
const mysql = require("mysql2");

module.exports = defineConfig({
  reporter: "mochawesome",
  reporterOptions: {
    charts: true,
    overwrite: false,
    html: false,
    json: true,
    reportDir: "cypress/reports/mocha"
  },
  e2e: {
    // Menggunakan setupNodeEvents untuk menangani event dan task pada Cypress
    setupNodeEvents(on, config) {
   // Menambahkan task khusus "queryDb" untuk menjalankan query pada database
      on("task", {
        queryDb: (query) => {
          // Memanggil fungsi queryTestDb dengan query dan konfigurasi dari Cypress
          return queryTestDb(query, config);
        },
      });
    },
    // Mengatur konfigurasi environment, khususnya informasi database
    env: {
      db: {
        server: "127.0.0.1", // Alamat server database
        user: "root", // Nama pengguna database
        password: "", // Kata sandi database
        database: "belajar_mysql", // Nama database
        port: "3306", // Port database
      },
    },
  },
});

// Fungsi untuk menjalankan query pada database
function queryTestDb(query, config) {
  // Membuat koneksi MySQL menggunakan konfigurasi dari environment Cypress
  const connection = mysql.createConnection(config.env.db);
  // Membuka koneksi ke database
  connection.connect();

  // Mengembalikan promise untuk menangani hasil query
  return new Promise((resolve, reject) => {
    // Menjalankan query pada database
    connection.query(query, (error, result) => {
      // Menangani kesalahan (error) jika ada
      if (error) reject(error);
      else {
        // Menutup koneksi ke database
        connection.end();
        // Mengembalikan hasil query menggunakan resolve
        return resolve(result);
      }
    });
  });
}
