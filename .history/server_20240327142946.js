import express, { static } from "express";
const app = express();
const port = 3000;

// Configurando o servidor para servir arquivos estáticos
app.use(static(__dirname + "/public"));
app.use("/css", static(__dirname + "/src/Styles"));
app.use("/images", static(__dirname + "/src/Images"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/Pages/Home.html");
});

console.log(__dirname);
app.listen(port, "192.168.10.20", () => {
  console.log(`Servidor rodando em http://192.168.10.20:${port}`);
});
