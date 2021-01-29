const route = require('express').Router();
const Todo = require('../../models/Todo')

route.post('/', async (req, res, next) => {
  
        console.log(req.body)

        const task = new Todo({
            action: req.body.action,
        })

        console.log(task, " \n, iam task\n\n");

        if (req.body.action.length <= 0) {
            res.send('Empty Field ');
        }

        try {
            let data = await task.save();
            console.log("Todo Assigned");
            res.send(data);

        } catch (err) {
            console.log(" Error in Posting Todo \n", err);
            res.send("Field is empty");
        }
});

module.exports = exports = {
    route,
};