const { Router } = require("express");
const { auth } = require('@utils/discordApi');
const Bots = require("@models/bots");
const { web: {recaptcha_v2: {site_key}}, bot_options: {bot_tags, max_summary_length} } = require("@root/config.json");

const route = Router();



route.get("/", auth, async (req, res) => {
   let bot = await Bots.findOne({botid: req.params.id}, { _id: false })

    res.render("add", {
      
        bot,
        bot_tags,
        max_summary_length,
        site_key,
        req
    })
});

module.exports = route;
