const AuthController = require('../controllers/AuthController');
const router = require('express').Router();

router.post('/login', AuthController.login);

module.exports = router;