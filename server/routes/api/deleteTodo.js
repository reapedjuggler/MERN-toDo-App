const route = require('express').Router();
const Todo = require('../../models/Todo');

route.delete('/todos/:id', async (req, res, next) => {
    
    try {
        Todo.findOneAndDelete({'_id': req.params.id});
        console.log("Todo deleted");
        res.send("Todo deleted");
    } catch (err) {
        console.log("Problem in deletion");
        res.send(" error in deletion")
    }

});
  
module.exports = exports = {
    route,
}