// Importo librerie
const express = require("express");
const dotenv = require("dotenv");

// Importo i posts.js
const postsController = require("./controllers/posts");

dotenv.config();

// Uso variabile per la porta
let port = +process.env.PORT || 3001;

// Definisco istanza di express.js
const app = express();

// Configuro asset statico
app.use(express.static("public"));

// Definisco la prima rotta
app.get("/", postsController.index);

// Avvio il server
app.listen(port, () => {
  console.log(`Server is running on http:/localhost:${port}`);
});
