var express = require("express");
const clients = require("../models/clients");
var router = express.Router();

/* GET home page. */
router.get("/", async function (req, res, next) {
  // let data = await clients.selectClient(req.query.id);
  try {
    let data = await clients.selectAll();
    // console.log(data[0][0].name);
    res.render("index", { title: "Express", data: data[0] });
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
