const express = require('express');
const { route } = require('express/lib/application');
const router = express.Router()

const { register, login,forgotpassword,resetpassword,groupregister,suggestsupervisor } = require('../controllers/auth')

router.route("/register").post(register)

router.route("/login").post(login)

router.route("/forgotpassword").post(forgotpassword)

router.route("/resetpassword/:resetToken").put(resetpassword)

router.route("/groupregister").post(groupregister)//Group reg route

router.route("/suggestsupervisor").get(suggestsupervisor)//suggested supervisor
module.exports = router