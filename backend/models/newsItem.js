const mongoose = require('mongoose');

const newsSchema = mongoose.Schema({
    author: {
        type: String,
        required: true
    },
    headline: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true,
    },
    postDate: {
        type: String,
        required: true
    },
    startDate: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model('News', newsSchema);