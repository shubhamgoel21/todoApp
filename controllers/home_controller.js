// require Todo schema 
const Todo = require("../models/todo");

module.exports.home = function(req,res){

    // fetch all the existing todos from the db for home screen 
    Todo.find({}, function(err, todos){
        if(err){
            console.log("Error in fetching todos from db");
            return;
        }

        return res.render('home', {
            title: "Home", 
            todo_list: todos
        });
    });
    
};