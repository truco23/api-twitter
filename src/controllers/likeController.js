const mongoose = require('mongoose');

let tweetModel = mongoose.model('tweets');

module.exports = {

    async liker(req, res) {

        tweetModel
            .findById(req.params.id)
            .then(tweet => {

                tweet.set({ likes: tweet.likes + 1 });
                tweet.save();
                console.log('Tweet curtido');
                req.io.emit('like', tweet);
                return res.json(tweet);
            }, erro => {
                console.log(erro);
                return res.status(500).json(erro.message)
            })
    }
}

