// require Todo schema 
const Todo = require("../models/todo");

module.exports.delete = function(req,res){
    
    // delete all todos which are checked 
    Todo.deleteMany({isChecked: true}, function(err, deletedTodo){
        if(err){
            console.log("Error deleting todo");
            return;
        }

        return res.redirect("back");
    });
};