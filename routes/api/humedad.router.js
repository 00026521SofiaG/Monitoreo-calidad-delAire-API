const express = require('express');
const router = express.Router();

const humedadController = require("../../controller/humedad.controller");

router.post('/createhumedad', humedadController.setHumedad);

router.get('/hum', humedadController.getHumedad);

//router.get("/humall", humedadController.findAll);

module.exports = router;