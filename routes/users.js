const UserController = require('../controllers/UserController');
const router = require('express').Router();

router.get("/", UserController.list);
router.get("/:id", UserController.find);

module.exports = router;