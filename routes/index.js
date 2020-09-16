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
module.exports = router;