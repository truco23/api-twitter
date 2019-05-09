const mongoose = require('mongoose');

let tweetModel = mongoose.model('tweets')

module.exports = {

    async list(req, res) {

        await tweetModel
            .find({})
            .sort('-date')
            .then(tweets => {
                console.log('Tweets encontrados');
                return res.json(tweets);
            }, erro => {
                console.log('Não foi possível encontrar os twitters');
                console.log(erro);
                return res.status(500).json(erro)
            })
    },

    async search(req, res) {

        await tweetModel
            .findById(req.params.id)
            .then(tweet => {

                if(!tweet) {
                    throw new Error('Não foi possível encontrar o twitter')
                }
                console.log('Tweet encontrado');
                console.log(tweet);
                return res.json(tweet);
            }, erro => {
                console.log(erro);
                return res.status(500).json(erro.message)
            })
    },

    async new(req, res) {

        await tweetModel
            .create(req.body)
            .then(tweet => {
                
                console.log('Tweet realizado com sucesso');
                console.log(req.body);

                req.io.emit('tweet', tweet);
                return res.json(tweet);
            }, erro => {
                
                console.log(erro);
                return res.status(500).json(erro.message)
            })
    },

    async remove(req, res) {

        await tweetModel
            .deleteOne({ _id: req.params.id })
            .then(() => {

                console.log('Autor removido com sucesso ' + req.params.id);
                res.sendStatus(200)
            }, erro => {
                console.log(erro);
                res.status(500).json(erro.message)
            })
    }
};