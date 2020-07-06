var express = require("express");
const clients = require("../models/clients");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  // let data = await clients.selectClient(req.query.id);
  let data = [[]];
  try {
    if (req.query.id) {
      data = await clients.selectClient(req.query.id);
    }
    res.render("index", { title: "Express", data: data[0] });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
