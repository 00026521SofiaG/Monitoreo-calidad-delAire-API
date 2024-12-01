const express = require('express');
const router = express.Router();

const gasesController = require("../../controller/gases.controller");

router.post('/creategases', gasesController.setGases);

router.get('/gas', gasesController.getGases);

//router.get("/gasall", gasesController.findAll);

module.exports = router;