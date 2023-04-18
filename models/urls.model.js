const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlId: {
        type: String,
        required: true,
        unique: true
    },
    urlOrigin: {
        type: String,
        required: true
    },
    clickTime: {
        timestamp: [{ 
            type: Number,
        }]
    }
}, {
    timestamps: true
});

const Url = mongoose.model('Url', urlSchema);
module.exports = Url;