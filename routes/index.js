var express = require("express");
const clients = require("../models/clients");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  let data = await clients.selectClient(req.query.id);
  // console.log(data[0][0].name);
  res.render("index", { title: "Express", data: data[0] });
});

module.exports = router;
