const { Message } = require('../models');

const messageFactory = require("../factories/Message");

class MessageController {
    async list(_req, res) {
        const result = await Message.findAll();
        res.json(result);
    }

    async find(req, res) {
        const result = await Message.findOne({ where: { id: req.params.id } });
        res.json(result);
    }

    async create(req, res) {
        const sent = await Message.create({
            text: req.body.text,
            UserId: 1,
            seen: false,
        });

        const answer = await Message.create(messageFactory());

        const response = {
            sent: sent.dataValues,
            answer: answer.dataValues
        };

        res.json(response);
    }

    async delete(req, res) {
        throw "Not implemented";
    }
}

module.exports = new MessageController();