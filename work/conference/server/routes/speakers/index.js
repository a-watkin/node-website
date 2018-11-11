const express = require("express");

const router = express.Router();

module.exports = () => {
  router.get("/", (req, res, next) => {
    // had to restard the server
    // return res.send("does this work? Ok now it works");

    // trying to send the pug page does not work
    // ok i'm getting a 500 status
    // so it's probably not finding the template
    // yup! had the directory for speakers inside layouts
    // it needed to be inside views, if it cannot see the view
    // it cannot render it - so at least deep nesting is out?
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
