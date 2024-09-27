const mongoose = require("mongoose");
const User = mongoose.model("User");

const sha256 = require('js-sha256');
const Message = require("../models/Message");


exports.register = async (req,res) => {

    const {name,email,password} = req.body;

    const emailRegex = /[@gmail.com|@yahoo.com|@hotmail.com|@live.com]$/;

    if(emailRegex.test(email)) throw "Email is not supported from your domain.";
    if(password.length < 6) throw "Password must be at least 6 characters long .";

    const user = new User({name,email,password : sha256(password + process.env.SALT)});

    await user.save();

    res.json({
        Message:"User [" + name + "] registered successfully!";
    })
};
exports.login = async (req,res) => {
    
};