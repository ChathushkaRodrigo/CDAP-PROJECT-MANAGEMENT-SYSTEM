const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router()
const { register,login,forgotpassword,resetpassword} = require('../controllers/auth')


router.route("/register").post(register)

router.route("/login").post(login)

router.route("/forgotpassword").post(forgotpassword)

router.route("/resetpassword/:resetToken").put(resetpassword)


module.exports = router