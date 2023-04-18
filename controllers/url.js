const Url = require("../models/urls.model");
const { nanoid } = require('nanoid');

const handleURL = async (req, res) => {
    const urlGen = await Url.create({
        urlId: nanoid(10),
        urlOrigin: req.body.url,
        clickTime: []
    })
    res.status(201).json(urlGen);
}

module.exports = {
    handleURL
}