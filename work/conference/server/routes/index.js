const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res, next) => {
    return res.send("Index");
  });
  // you must return something, or you get an error
  return router;
};
