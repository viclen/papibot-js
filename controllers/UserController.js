const { User } = require('../models');

class UserController {
    async list(_req, res) {
        const result = await User.findAll();
        res.json(result);
    }

    async find(req, res) {
        const result = await User.findOne({ where: { id: req.params.id } });
        res.json(result);
    }

    async create(req, res) {
        throw "Not implemented";
    }

    async delete(req, res) {
        throw "Not implemented";
    }
}

module.exports = new UserController();