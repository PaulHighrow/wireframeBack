const express = require("express");
const wakeUp = require("../controllers/wakeUp");
const crmRefresh = require("../middlewares/crm/crmRefresh");

const router = express.Router();

router.get("/", wakeUp, crmRefresh);

module.exports = router;
