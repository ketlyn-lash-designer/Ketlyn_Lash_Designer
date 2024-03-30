const express = require("express");
const app = express();
const port = 3000;

// Configurando o servidor para servir arquivos estáticos
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
