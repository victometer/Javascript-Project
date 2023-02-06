const express = require('express')

const createRouter = function(collection) {

    const router = express.Router();

    router.get('/home', (req, res) => {
        collection
        .find()
        .toArray()
        .then((docs) => res.json(docs))
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        })
    });

    router.post('/home', (req, res) => {
        const newListItem = req.body
        collection
        .insertOne(newListItem)
        .then((result) => {
            res.json(result.insertId)
        })
        .catch((err) => {
            console.error(err);
            res.status(500);
            res.json({ status: 500, error: err });
        })
    })
    
    
    return router
}

module.exports = createRouter