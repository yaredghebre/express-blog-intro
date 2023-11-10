// Importo librerie
const express = require("express");
const dotenv = require("dotenv");

dotenv.config();

// Uso variabile per la porta
let port = +process.env.PORT || 3001;

// Definisco istanza di express.js
const app = express();

// Avvio il server
app.listen(port, () => {
  console.log(`Server is running on http:/localhost:${port}`);
});
