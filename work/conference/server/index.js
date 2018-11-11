const express = require("express");
const creatError = require("http-errors");
const path = require("path");
// server env varibles
const configs = require("./config");

const app = express();

const config = configs[app.get("env")];

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

// Uses http-error to override default 404 behaviour of express
app.use((req, res, next) => {
  return next(creatError(404, "File not found"));
});
// Error middleware for the above
app.use((err, req, res, next) => {
  // makes the error message available in the template
  res.locals.message = err.message;
  // either the message from above made with creatError or internal server error 500
  const status = err.status || 500;
  // make it available in the template
  res.locals.status = status;
  // if development show the whole error stack, otherwise return and empty object
  res.locals.error = req.app.get("env") === "development" ? err : {};
  // send error status back
  res.status(status);
  // return the error page
  return res.render("error");
});

app.listen(3000);

module.export = app;
