const express = require("express");
const router = express.Router();
const projects = require("../controllers/projects.controller");

router.get("/", projects.getAllProjects);

module.exports = router;
