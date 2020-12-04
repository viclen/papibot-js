// cria a instacia do router
const router = require("express").Router();

router.use('/auth', require('./auth'));

router.use(require('../middleware/Auth'));

router.use("/users", require('./users'));
router.use("/messages", require('./messages'));

module.exports = router;