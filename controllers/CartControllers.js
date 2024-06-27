const { message } = require('statuses');
const prodModel = require('../models/product-models');


module.exports.addedcart = async function(req,res){
    let name = req.body.name + " " + req.body.series;
    let price = req.body.price;
    let image = req.body.image;


    let product = await prodModel.create({
        name,
        price,
        image
    })
    console.log(product);
    res.status(200).json({message: "Item Added Successfully"});

}