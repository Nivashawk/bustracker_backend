const express = require('express')
const router = express.Router();
const BusController = require('../controller/bus_controller')

router.post('/login', BusController.login)
router.post('/insert', BusController.insert)
router.get('/getdetails', BusController.showDriverDetail)
router.patch('/updatelocation', BusController.updateCurrentLocation)
router.get('/getlocation', BusController.getCurrentLocation)


module.exports = router