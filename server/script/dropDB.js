import mongoose from 'mongoose';
import 'dotenv/config';
// dotenv/config liest .env Datei und fügt diese Werte zu process hinzu.

// env heißt environment
console.log(process.env.DB);
console.log(process.env.NODE_ENV);

const connection = await mongoose.connect(process.env.DB)
const isDeleted = mongoose.connection.db.dropDatabase()

if (isDeleted) {
    console.log("Database is dropped")
} else {
    console.log("Database is not dropped");
}