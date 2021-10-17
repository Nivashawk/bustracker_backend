const express = require('express')
const router = express.Router();
const UserController = require('../controller/user_controller')

router.post('/login', UserController.login)
router.get('/getdetails', UserController.showUserDetail)




module.exports = router