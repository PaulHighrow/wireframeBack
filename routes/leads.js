const express = require("express");

const getLeads = require("../controllers/getLeads");
const addLead = require("../controllers/addLead");

const crmAuth = require("../middlewares/crm/crmAuth");
const crmRefresh = require("../middlewares/crm/crmRefresh");
const postLead = require("../middlewares/crm/postLead");

const router = express.Router();

router.get("/", crmAuth, getLeads);

router.post("/", postLead, addLead, crmRefresh);

module.exports = router;
