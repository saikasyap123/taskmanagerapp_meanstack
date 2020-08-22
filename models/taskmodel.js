const mongoose = require('mongoose')
const Schema = mongoose.Schema
const TaskSchema = new Schema({
    title :{
        type:String,
        required:true,
        minlength:1,
        trim:true
    },
    _listid : {
        type:mongoose.Types.ObjectId,
        required:true
    },
    completed : {
        type :Boolean
    }

})

const Task = mongoose.model('Tasks', TaskSchema)

module.exports = Task