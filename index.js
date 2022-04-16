const express = require("express");

// require database and schema objects
const db = require("./config/mongoose");
const Todo = require("./models/todo");

const app = express();

const port = 3000;

// use express router
app.use("/", require("./routes"));

// use ejs as view engine 
app.set("view engine","ejs");
app.set("views","./views");

// body parsing
app.use(express.urlencoded({extended: true}));

// use assets folder for css , images , fonts , js 
app.use(express.static('assets'));

// listen to the port 3000
app.listen(port , function(err){
    if(err){
        console.log(`Error in running the server: ${err}`);
        return;
    }

    console.log(`Server is running on port: ${port}`);
})