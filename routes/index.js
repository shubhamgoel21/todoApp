const express = require("express");

// require body-parser for express router 
const bodyParser = require("body-parser");

const router = express.Router();

// require all the controllers
const homeController = require("../controllers/home_controller");
const createTodoController = require("../controllers/create_todo_controller");
const changeTodoStatus = require("../controllers/change_todo_status_controller");
const deleteTodos = require("../controllers/delete_todos_controller");

// use the body-parser for all routes 
router.use(bodyParser.urlencoded({
    extended: true
}));

// home 
router.get("/", homeController.home);

// create new todo 
router.post("/create-todo", createTodoController.create);

// change the status of todo after clicking checkbox 
router.get("/change-todo-status", changeTodoStatus.status);

// delete selected todos 
router.get("/delete-todos", deleteTodos.delete);

module.exports = router;

