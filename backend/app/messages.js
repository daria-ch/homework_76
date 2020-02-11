const express = require('express');
const fileDb = require('../fileDb');

const router = express.Router();

let lastMessages = [];

router.get('/', async (req, res) => {
        const messages = await fileDb.getMessages();
        const date = req.query.datetime;
        const isDate = new Date(date);

        if (!date) {
            messages.forEach(message => {
                if (lastMessages.length < 30) {
                    lastMessages.push(message)
                }
            });
            res.send(lastMessages);
            lastMessages = [];
        } else {
            if (isNaN(isDate.getDate()) === true) {
                res.status(400).send({"error": "Date is incorrect!"});
            } else {
                messages.forEach(message => {
                    if (message.datetime < date) {
                        lastMessages.push(message);
                    }
                });
                res.send(lastMessages);
                lastMessages = [];
            }
        }
    }
);

router.post('/', async (req, res) => {
    if (req.body.author === '' || req.body.message === '') {
        res.status(400).send({"error": "Author and message must be present in the request"})
    } else {
        await fileDb.addMessage(req.body);
        res.send({author: req.body.author, message: req.body.message});
    }
});


module.exports = router;