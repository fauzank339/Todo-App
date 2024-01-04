const express = require("express")

//const types = require('types')
const { createTodo, updateTodo } = require("./types")
const { todo } = require("./db")
const cors = require("cors")

//console.log(types.createTodo)
const app = express()
app.use(cors())
app.use(express.json())

app.post("/todo", async(req,res)=>{
    const createPayload = req.body
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
    }
    await todo.create({
        title: createPayload.title,
        description: createPayload.description,
        completed: false
    })
    res.json({
        msg: "Todo created"
    })

    

})

app.get("/todos", async(req,res)=>{
    const todos = await todo.find()
    res.json({
        todos
    })
})

app.put("/completed", async(req,res)=>{
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)
    if(!parsedPayload.success){
        res.status(411).json({
            msg: "You sent the wrong inputs",
        })
        return
    }
    await todo.updateOne({
        _id: updatePayload.id
    },{
        completed: true
    })
    res.json({
        msg: "Todo marked as completed"
    })
})

app.listen(3000)