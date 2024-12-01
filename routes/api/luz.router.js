const express = require('express');
const router = express.Router();

const luzController = require("../../controller/luz.controller");

router.post('/createluz', luzController.setluz);

router.get('/light', luzController.getLuz);

//router.get("/luzall", luzController.findAll);

module.exports = router;