const route = require('express').Router();
const Todo = require('../../models/Todo')

route.post('/', async (req, res, next) => {
  
        console.log(req.body)

        const task = new Todo({
            action: req.body.action,
        })

        console.log(task, " \n, iam task\n\n");

        try {
            await task.save();
            console.log("Todo Assigned");
            res.send("congo");

        } catch (err) {
            console.log(" Error in Posting Todo \n", err);
            res.send("ooooops");
        }
});

module.exports = exports = {
    route,
};