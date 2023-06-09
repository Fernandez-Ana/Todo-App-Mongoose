import mongoose from 'mongoose'
import { Todo } from '../model/Todo.js'
import 'dotenv/config.js'

await mongoose.connect(process.env.DB)

await Todo.create({ text: "Wischen", completed: false });

mongoose.disconnect()