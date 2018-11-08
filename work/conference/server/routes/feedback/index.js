const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res, next) => {
    return res.send("Feedback");
  });

  // the URL path here is speakers/someName
  // by virtue of being in this folder
  router.post("/", (req, res, next) => {
    return res.send("Form send");
  });
  // you must return something, or you get an error
  return router;
};
