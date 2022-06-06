const express = require("express");
const Controller = require("../Controller/Projects_Controller");
const router = express.Router();




router
    .route("/projects")
    .get(Controller.getAllProjects);
    // .post(Controller.addProject);
router
    .route("/projects/:_id")
    .delete(Controller.deleteProject)
    .put(Controller.editProject);



module.exports = router;    
