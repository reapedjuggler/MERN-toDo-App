const route = require('express').Router();
const Todo = require('../../models/Todo');

route.get('/todos', async (req, res, next) => {

    console.log("\n\nReached get request\n\n")

    try {
       let data = await Todo.find({}, 'action');
       console.log("Displayed\n");
       console.log(data, " \n\niam data\n\n");
       res.json(data);
    } catch (err) {
        console.error("No object\n\n", err);
        res.send("Field is empty");
    }
});


route.use('/create', require('./addTodo').route);
route.use('/delete/:id', require('./deleteTodo').route);

module.exports = exports = {
    route,
} 