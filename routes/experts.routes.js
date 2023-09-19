const express = require("express");
const router = express.Router();
const experts = require("../controllers/experts.controller");

router.get("/", experts.getAllExperts);
router.get("/:id", experts.getExpertById);
router.post("/", experts.addExpert);

module.exports = router;
