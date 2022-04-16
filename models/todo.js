// require mongoose to communicate with mongoDB 
const mongoose = require("mongoose");

// create new schema 
const todoSchema = new mongoose.Schema({
    isChecked: {
        type: Boolean,
        default: false
    },

    description: {
        type: String,
        required: true
    },
    
    category: {
        type: String
    },

    dueDate: {
        type: String
    }
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;