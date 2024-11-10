const express = require("express");
const router = express.Router();

//routes import
const temperaturaRouter = require("./temperatura.router");
const humedadRouter = require("./humedad.router");
const gasesRouter = require("./gases.router");
const coRouter = require("./co.router");
const luzRouter = require("./luz.router");

//Defininf routes

router.use("/temperatura", temperaturaRouter);
router.use("/humedad", humedadRouter);
router.use("/gases", gasesRouter);
router.use("/co", coRouter);
router.use("/luz", luzRouter);

module.exports = router;
