import express, { static } from "express";
const app = express();
const port = 3000;

// Configurando o servidor para servir arquivos estáticos
app.use(static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/src/pages/Home.html");
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
