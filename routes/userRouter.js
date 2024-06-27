const express = require('express');
const router = express.Router();
const userModel = require("../models/user-models");
const bcrypt = require("bcrypt");
const {registerUser,loginUser} = require("../controllers/authController");


require("dotenv").config();


router.get("/", function (req,res){
    res.send("hey");
});

router.post("/login", loginUser);


router.post("/register", registerUser);


module.exports = router;