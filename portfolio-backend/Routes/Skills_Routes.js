const express = require("express");
const Controller = require("../Controller/Skills_Controller");
const router = express.Router();




router
    .route("/skills")
    .get(Controller.getAllSkills)
    .post(Controller.addSkill);
router
    .route("/skills/:_id")
    .delete(Controller.deleteSkill)
    .put(Controller.editSkill);

router
    .route("/skills/:type")
    .get(Controller.getByType);

module.exports = router;    
