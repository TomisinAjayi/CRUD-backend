const express = require("express");
const router = express.Router();
const waitlistController = require("../controller/waitlist");

router.get("/all", waitlistController.getAllWaitlist);
router.post("/add", waitlistController.postAddWaitlist);

module.exports = router;