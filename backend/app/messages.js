const express = require('express');
const fileDb = require('../fileDb');

const router = express.Router();

router.get('/', async (req, res) => {
    const messages = await fileDb.getMessages();
    res.send(messages);
});

router.post('/', async (req, res) => {
    if (req.body.author === '' || req.body.message === '') {
        res.status(400).send({"error": "Author and message must be present in the request"})
    } else {
        await fileDb.addMessage(req.body);
        res.send({author: req.body.author, message: req.body.message});
    }
});


module.exports = router;