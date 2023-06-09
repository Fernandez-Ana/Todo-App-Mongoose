import express from "express";
import mongoose from 'mongoose';
// import cors from 'cors'
import { Todo } from './model/Todo.js'
// import { todos, addTodo, deleteTodo, updateTodo } from "./model/TodoModel.js"
import 'dotenv/config.js'


mongoose.connect(process.env.DB)

const app = express()
const PORT = process.env.Port || '3008';

app.use(express.json())
// app.use(cors())

app.get("/api/todos", async (req, res) => {
    const todos = await Todo.find()
    res.send(todos)
})

app.post("/api/todos", async (req, res) => {
    try {
        const newTodo = await Todo.create(req.body)
        res.send({ newTodo: newTodo, errors: null })
    } catch (error) {
        res.send({ newEntry: null, errors: error.errors })
    }
})

app.delete("/api/todos/:id", async (req, res) => {
    const { id } = req.params;
    const result = await Todo.deleteOne({ _id: id })
    res.send(result)
})


// app.put("/todos/:id", async (req, res) => {
//     const { id } = req.params;
//     const todo = req.body
//     const updatedTodo = await updateTodo(id, todo)
//     res.send(updatedTodo)
// })




app.listen(PORT, () => console.log(`Server is am laufen mit diesem Port ${PORT}`))