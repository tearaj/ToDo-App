const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
require('dotenv').config()

const routes = require('./Routes/toDoRoutes')
const app = express()
const PORT = process.env.port || 5000

async function db_connection(){
    try{
        await mongoose.connect(process.env.MONGO_DB_URL)
        console.log("CONNECTED TO MONGO DB")
    }
    catch(err){
        console.log(err)
    }
}
db_connection()
// mongoose
//  .connect(process.env.MONGO_DB_URL)
//  .then(()=>console.log("CONNECTED TO MONGODB"))
//  .catch((err)=>console.log(err))
app.use(express.json())
app.use(cors())
app.use(routes)
app.listen(PORT ,()=>console.log("LISTENING ON PORT:",PORT))