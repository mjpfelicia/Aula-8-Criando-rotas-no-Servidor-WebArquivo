const htt = require("http");
const porta = 443;
const servidor = htt.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url == "/") {
    res.write("<h1>Seja bem vindo ao servidor!</h1>");
    
  } else if (req.url == "/server") {
    res.write("<h1>Server</h1>");
    
  } else if (req.url == "/server/node") {
    res.write("<h1>Server Node</h1>");
    
  } else {
    res.write("<h1>Página não encontrada</h1>");
  }
  res.end();
});
servidor.listen(porta, () => {
  console.log("Servidor rodando");
});
