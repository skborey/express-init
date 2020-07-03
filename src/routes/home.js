var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Online", response: "Good" });
});

export default {
  baseUrl: "/",
  router,
};
