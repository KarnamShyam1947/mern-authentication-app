const express = require("express")
const { loginUser, registerUser } = require("../controller/AuthController")

const authRouter = express.Router()

authRouter.route("/login")
            .post(loginUser)

authRouter.route("/register")
            .post(registerUser)

module.exports = authRouter
