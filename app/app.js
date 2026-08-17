// app.js
const {
  createServer
} = require("http");
const next = require("next");

// Używamy zmiennej środowiskowej PORT, która jest ustawiana przez cPanel
const port = process.env.PORT;
// Adres do nasłuchiwania w środowisku cPanel to zazwyczaj 127.0.0.1 (localhost)
const hostname = '127.0.0.1'; 

if (!port) {
  console.error("Zmienna środowiskowa PORT nie jest ustawiona. Upewnij się, że aplikacja jest uruchamiana przez cPanel.");
  process.exit(1);
}

// Tworzymy instancję aplikacji Next.js
const app = next({
  dev: false, // Ustawiamy na 'false', ponieważ jest to środowisko produkcyjne
  hostname: hostname,
  port: port
});
const handle = app.getRequestHandler();

app
  .prepare()
  .then(() => {
    // Tworzymy prosty serwer HTTP, który obsługuje żądania za pomocą Next.js
    createServer((req, res) => {
      // Obsługujemy żądania
      handle(req, res);
    }).listen(port, hostname, (err) => {
      if (err) throw err;
      // cPanel powinien wyświetlać logi, ale to jest przydatne do diagnostyki
      console.log(`> Gotowe na http://${hostname}:${port}`);
    });
  })
  .catch((ex) => {
    console.error("Błąd podczas uruchamiania aplikacji Next.js:", ex.stack);
    process.exit(1);
  });