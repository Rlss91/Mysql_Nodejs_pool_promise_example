var express = require("express");
const clients = require("../models/clients");
var router = express.Router();

router.get("/", (req, res) => {
  res.render("new");
});
router.post("/", async (req, res) => {
  console.log(req.body);
  try {
    let data = await clients.newClient(req.body.name, req.body.address);
    // console.log("data", data);
    res.redirect("/");
  } catch (e) {
    console.log(e);
  }
});

module.exports = router;
