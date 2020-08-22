const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')



const listRouter = require('./routes/listRoute');
const taskRouter = require('./routes/taskRoute')

const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/TaskManager', { useNewUrlParser:true, useUnifiedTopology:true})
const db = mongoose.connection
db.on('error', (err)=>{
    console.log(err)
})
db.once('open', ()=>{
    console.log("Database Successfully Connected")
})

app.use(bodyParser.json())
app.use(morgan('dev'))

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())
app.use(cors({
    origin:['http://localhost:4200', 'http://127.0.0.1:4200'],
    credentials:true

}))


app.use('/list',listRouter )
app.use('/task', taskRouter)




app.listen(3000, ()=>{
    console.log("Server is listening to port 3000!")
})

module.exports = app