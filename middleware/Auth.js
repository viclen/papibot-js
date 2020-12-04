const AuthController = require('../controllers/AuthController');

module.exports = async (req, res, next) => {
    const user = await AuthController.getUser(req);
    
    if (user) {
        req.user = user;
        return next();
    }

    res.status(403).send("User not authenticated.");
};