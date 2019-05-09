const mongoose = require('mongoose');

let tweets = new mongoose.Schema({

    author: {
        required: true,
        type: String   
    },
    content: {
        required: true,
        type: String
    },
    likes: {
        type: Number,
        default: 0
    },
    date: {
        type: Date,
        default: Date.now,
    }
});

mongoose.model('tweets', tweets);