const express = require("express");
const Controller = require("../Controller/Messages_Controller");
const router = express.Router();




router
    .route("/messages")
    .get(Controller.getAllMessages)
    .post(Controller.addMessage);
router
    .route("/messages/:_id")
    .delete(Controller.deleteMessage)
    .put(Controller.editMessage);



module.exports = router;    