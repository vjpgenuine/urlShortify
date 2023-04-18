const mongoose = require('mongoose');

const condb = async (uri) => {
    return mongoose.connect(uri, {
        dbName: process.env.MONGO_DB || 'urls',
        useNewUrlParser: true,
        useUnifiedTopology: true
    });
}

module.exports = condb;