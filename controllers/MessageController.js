const { Message } = require('../models');

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
        throw "Not implemented";
    }

    async delete(req, res) {
        throw "Not implemented";
    }
}

module.exports = new MessageController();