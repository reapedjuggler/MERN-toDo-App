const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Todo = new Schema ({
    action: {
        type: String,
        required: true,
    }
});

module.exports = exports = mongoose.model('Todo', Todo);
