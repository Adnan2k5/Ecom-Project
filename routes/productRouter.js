const express = require('express');
const router = express.Router();
const {addedcart} = require('../controllers/CartControllers')
router.get("/", function (req,res){
    res.send("hey");
});

router.post("/addcart", addedcart)


module.exports = router;