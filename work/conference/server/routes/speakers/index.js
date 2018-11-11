const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res, next) => {
    console.log("speakers route");
    return res.render("speakers");
  });

  // the URL path here is speakers/someName
  // by virtue of being in this folder
  router.get("/:name", (req, res, next) => {
    return res.send(`Speaker detail page for ${req.params.name}`);
  });
  // you must return something, or you get an error
  return router;
};
