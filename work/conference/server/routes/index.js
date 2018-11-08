const express = require("express");

const router = express.Router();

const SpeakersRoute = require("./speakers");
const FeedbackRoute = require("./feedback");

module.exports = () => {
  router.get("/", (req, res, next) => {
    return res.send("Index");
  });

  router.use("/speakers", SpeakersRoute());
  router.use("/feedback", FeedbackRoute());

  // you must return something, or you get an error
  return router;
};
