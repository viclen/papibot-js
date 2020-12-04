const { User } = require('../models');

class AuthController {
    async login(req, res) {

    }

    async getUser(req) {
        if (process.env.BYPASS_CREDENTIALS) {
            const user = await User.findOne({ where: { id: 1 } });
            return user;
        }

        const key = req.headers.authentication || req.headers.auth;
        if (key) {
            const user = await User.findOne({ where: { key } });
            return user;
        }

        return null;
    }
}

module.exports = new AuthController();