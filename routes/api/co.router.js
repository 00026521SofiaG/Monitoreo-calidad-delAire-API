const express = require('express');
const router = express.Router();

const coController = require("../../controller/co.controller");

router.post('/createco2', coController.setCO);

router.get('/co2', coController.getCO);

//router.get("/co1all", coController.findAll);

module.exports = router;