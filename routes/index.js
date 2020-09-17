const express = require('express');
const router = express.Router();
const langModel = require('../models/lang');

router.get("/", async (req, res) => {
    const langData = await langModel.getAll();
    
    res.render("template", {
        locals: {
            title: "Languages",
            data: langData
        },
        partials: {
           partial: "partial-lang"
        }
    })
});

router.post("/", async (req, res) => {
    console.log("req.body:", req.body);
    const dbResponse = await langModel.updateStatus(6, "HTML");
    console.log("database reponse: ", dbResponse);
    res.status(200).send("OK").end();
});



module.exports = router;