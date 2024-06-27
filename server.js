const express = require("express");
const app = express();
const copkieParser = require("cookie-parser");
const db = require('./config/mongoose-connection');
const path = require("path");
const exp = require("constants");
const cookieParser = require("cookie-parser");
const ownersRouter = require("./routes/ownerRouter");
const userRouter = require("./routes/userRouter");
const productRouters = require("./routes/productRouter");
const cors = require('cors');
const bodyParser = require('body-parser');


app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(cors());
app.use(express.static(path.join(__dirname,"public")));
app.set("view engine", "ejs");



app.use("/owners", ownersRouter);
app.use("/users",userRouter);
app.use("/products", productRouters);
app.post("/create", ownersRouter);
app.post("/login", userRouter);
app.post("/register", userRouter);
app.post("/addcart", productRouters)

app.listen(4000,()=>{
    console.log(`Server started`);
});