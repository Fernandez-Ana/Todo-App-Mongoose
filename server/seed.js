import mongoose from 'mongoose'
import { Todo } from './model/Todo.js'

await mongoose.connect('mongodb://localhost:27017/my_todo')

await Todo.create({ text: "Wischen", completed: false });

// Todo.deleteOne({})

mongoose.disconnect()