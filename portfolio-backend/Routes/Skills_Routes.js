const express = require("express");
const Controller = require("../Controller/Skills_Controller");
const router = express.Router();




router
    .route("/skills")
    .get(Controller.getAllSkills)
    .post(Controller.addSkill);
router
    .route("/skills/:name")
    .delete(Controller.deleteSkill)
    .put(Controller.editSkill);



module.exports = router;    
