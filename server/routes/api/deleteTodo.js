const route = require('express').Router();
const Todo = require('../../models/Todo');

route.delete('/', async (req, res, next) => {
    
    try {
        let data = Todo.findOneAndDelete({'_id': req.params.id});
        console.log("Todo deleted");
        res.send("Todo deleted");
    } catch (err) {
        console.log("Problem in deletion");
        res.send(" error in deletion");
    }

});
  
module.exports = exports = {
    route,
}