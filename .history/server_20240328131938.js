const express = require("express");
const app = express();
const port = 3000;

// Configurando o servidor para servir arquivos estáticos
app.use(express.static(__dirname + "/src"));
app.use("/js", express.static(__dirname + "/src/js/js"));
app.use("/css", express.static(__dirname + "/src/Styles/css"));
app.use("/images", express.static(__dirname + "/src/Images"));

const flatpickr = require("express");

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/Pages/Home.html");
});

app.get("/Agendamento", (req, res) => {
  res.sendFile(__dirname + "/src/Pages/Agendamento.html");
});

console.log(__dirname);
app.listen(port, "192.168.10.20", () => {
  console.log(`Servidor rodando em http://192.168.10.20:${port}`);
});
