// require Todo schema 
const Todo = require("../models/todo");

module.exports.status = function(req,res){
    var ischecked= false;
    var id = req.query.id;

    // find the current status of todo in db
    Todo.findById(id , function(err, todo){
        if(err){
            console.log("Error finding todo");
            return;
        }

        ischecked = todo.isChecked;

        // if current status if true ,set it to false in the db 
        if(ischecked){
            Todo.findByIdAndUpdate(id, {isChecked: false}, function(err, updated_todo){
                if(err){
                    console.log("Error updating todo");
                    return;
                }

                return res.redirect("back");
            });
        }
        
        // if current status if false, set it to true in the db 
        else{
            Todo.findByIdAndUpdate(id, {isChecked: true}, function(err, updated_todo){
                if(err){
                    console.log("Error updating todo");
                    return;
                }

                return res.redirect("back");
            });
        }
   
    });
};