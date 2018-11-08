const express = require("express");
const app = express();

// defaults to index.js
const routes = require("./routes");

// routing middleware
app.use("/", routes());

app.listen(3000);

module.export = app;
