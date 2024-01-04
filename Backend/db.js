const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://Abdullah:S2cNQDh8wXqRTt9K@cluster0.eyzye2w.mongodb.net/")

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
})

const todo = mongoose.model('todos', todoSchema)
 module.exports = {
    todo: todo
 }
