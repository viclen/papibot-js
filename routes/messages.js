const MessageController = require('../controllers/MessageController');
const router = require('express').Router();

router.get("/", MessageController.list);
router.get("/:id", MessageController.find);
router.post("/", MessageController.create);

module.exports = router;