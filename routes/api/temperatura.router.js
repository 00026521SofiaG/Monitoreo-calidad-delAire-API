const express = require('express');
const router = express.Router();

const temperaturaController = require("../../controller/temperatura.controller");

router.post('/createtemp', temperaturaController.setTemp);

router.get('/temp', temperaturaController.getTemperatura);

//router.get('/', temperaturaController.findAll);

module.exports = router;