require('dotenv').config();
const express = require('express');
const condb = require('./condb');
const router = require('./routes/url.route');
const Url = require("./models/urls.model");

const connectToUrlDB = async () => {
    await condb(process.env.MONGO_URI || 'mongodb://127.0.0.1:27017/');
    console.log("Database created on uri : " + process.env.MONGO_URI);
}
connectToUrlDB();

const app = express();

app.use('/url', router);
app.use(express.json());

app.get('/', (req, res) => {
    res.status(200).send("Url Shortner");
});

app.get('/:urlId', async (req, res) => {
    const redirectOrigin = await Url.findOneAndUpdate({
        urlId: req.params.urlId,
    }, {
        $push: {
            clickTime: {
                timestamp: Date.now(),
            },
        },
    });
    res.redirect(redirectOrigin.urlOrigin);
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
    console.log('app listening on port ' + PORT);
});
