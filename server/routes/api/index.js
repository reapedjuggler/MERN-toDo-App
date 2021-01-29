const route = require('express').Router();
const Todo = require('../../models/Todo');

route.get('/todos', async (req, res, next) => {

    try {
       await Todo.find({}, 'action');
       console.log("Displayed\n");
       res.send(data);
    } catch (err) {
        console.error("No object");
        res.send("empty");
    }
});


route.use('/create', require('./addTodo').route);
route.use('/delete', require('./deleteTodo').route);

module.exports = exports = {
    route,
} 