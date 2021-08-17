const { Router } = require("express");

const route = Router();

route.get("/", async (req, res) => {
    res.render("tos", {req})
});

module.exports = route;