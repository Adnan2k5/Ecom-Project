const userModel = require("../models/user-models");
const bcrypt = require("bcrypt");

const { redirect, message } = require("statuses");

module.exports.registerUser = async function (req,res){
    try{
        
        let email = req.body.Email;
        let fullname = req.body.Username;
        let password = req.body.Password;
        let extuser = await userModel.findOne({email: email});
        if (extuser) return res.status(401).send("User Already Exists");
        bcrypt.genSalt(10, async function(err,salt){
            bcrypt.hash(password,salt, async function(err,hash){
                if(err) return res.send(err.message);
                else {
                    let user = await userModel.create({
                        email,
                        fullname,
                        password: hash
                    })
                    console.log(process.env.JWT_KEY);
                    let usreml = user.email;
                    res.send("User Created");
                    res.redirect("/");
                };
                
            })
        })

    }catch(err){
        console.log(err.message);
    }
}


module.exports.loginUser = async function (req,res){
    // let {Username, Password} = req.body;
    // let extuser = await userModel.findOne({fullname: Username});
    // if(!extuser) return res.send("Username or Password incorrect");
    // bcrypt.compare(Password, extuser.password, function(err,result){
    //     if(result){
    //         res.status(200).json({message: "Login Successfull",redirectUrl: '/register'});
    //     }
    //     else{
    //         res.send("Username or Password incorrect");
    //     }
    // })

    console.log("triggered");
    let {Username, Password} = req.body;
    try{
        let extuser = await userModel.findOne({fullname: Username});
        if(extuser){
            bcrypt.compare(Password, extuser.password, function(err,result){
                if(result){
                    res.status(200).json({message: "Login Successfull", redirectUrl: "/register"});
                }
                else{
                    res.status(201).json({message: "Incorrect Password"});
                }
            })
        }
        else{
            console.log("Incorrect");
            res.status(501).json({message: "Incorrect Password"});
        }

     
        
    }
    catch(err){
        console.log(err.message);
    }
}