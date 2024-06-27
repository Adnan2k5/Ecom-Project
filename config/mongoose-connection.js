const mongoose = require('mongoose');
const config = require("config");
const dbgr = require("debug")("development:mongoose");
const appname = "scatch";

mongoose.connect(`${config.get("MongoDb_URI")}`+{appname})
.then(function(){
    dbgr("connected");
})
.catch(function(err){
    dbgr(err);
})

module.exports = mongoose.connection;