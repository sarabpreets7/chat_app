let express = require("express");
let { allMessages,sendMessage} = require("../controller/messageController");
let { protect } = require("../middleware/authMiddleware");

let router = express.Router();

router.route("/:chatId").get(protect, allMessages);
router.route("/").post(protect, sendMessage);

module.exports = router;