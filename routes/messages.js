const MessageController = require('../controllers/MessageController');
const router = require('express').Router();

router.get("/", MessageController.list);
router.get("/:id", MessageController.find);

module.exports = router;