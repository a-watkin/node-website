const express = require("express");
const path = require("path");
const app = express();

app.set("view engine", "pug");

// For production you do want to optermise HTML
if (app.get("env") === "development") {
  // tells pug not to optermise HTML (so you can read it easier)
  app.locals.pretty = true;
}

app.set("views", path.join(__dirname, "./views"));

// defaults to index.js
const routes = require("./routes");

// always looks in the root of the project so it find public there
// and automatically makes the files there available
app.use(express.static("public"));

app.get("/favicon.ico", (req, res, next) => {
  return res.sendStatus(204);
});

// routing middleware
app.use("/", routes());

app.listen(3000);

module.export = app;
