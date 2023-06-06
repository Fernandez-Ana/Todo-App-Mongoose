import mongoose, { Schema } from 'mongoose'

const todoSchema = new Schema({

    "text": {
        "type": "String"
    },
    "completed": {
        "type": "Boolean"
    },
})

export const Todo = mongoose.model('Todo', todoSchema)