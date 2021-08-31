const express = require("express");
const router = express.Router();
var calculadoraController = require("../controller/calculadoraController");

router.get('/add', calculadoraController.abreAdd);
router.post('/add', calculadoraController.add);

module.exports = router;