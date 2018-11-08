const express = require("express");
const app = express();

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
