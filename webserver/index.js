const express = require("express");

const app = express();

app.use((req, res, next) => {
  res.setHeader("x-server-date", new Date());
  return next;
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

app.get("/user/:name", (req, res) => {
  return res.send(`Userprofile of ${req.params.name}`);
});

app.listen(3000);
