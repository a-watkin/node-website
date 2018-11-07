const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("x-server-date", new Date());
  //   if you don't call next() here it will hand the server
  return next();
});

// this will crash the server
app.get("/throw", (req, res, next) => {
  throw new Error();
});

// this will not crash the server
app.get("/next", (req, res, next) => {
  setTimeout(() => {
    next(new Error("Something is wrong"));
  }, 1000);
});

app.get("/", (req, res) => {
  return res.send("hello i am a webserver");
});

app.get("/time", (req, res) => {
  const time = new Date().toString();
  return res.send(`The time is: ${time}`);
});

app.get("/hello", (req, res) => {
  if (!req.query.name) {
    res.send(400).end();
  }
  return res.send(`Hello: ${req.query.name}`);
});

// you can have multiple params and you can also use regular expressions
app.get("/user/:name", (req, res) => {
  return res.send(`Userprofile of ${req.params.name}`);
});

app.listen(3000);
