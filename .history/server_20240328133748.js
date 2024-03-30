import express, { static } from "express";
const app = express();
const port = 3000;

// Configurando o servidor para servir arquivos estáticos
app.use(static(__dirname + "/src"));
app.use("/js", static(__dirname + "/src/js/js"));
app.use("/css", static(__dirname + "/src/Styles/css"));
app.use("/images", static(__dirname + "/src/Images"));

import flatpickr from "flatpickr";

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
