const mongoose = require('mongoose')
const Schema = mongoose.Schema
const ListSchema = new Schema({
    title :{
        type:String,
        required:true,
        minlength:1,
        trim:true
    }

})

const List = mongoose.model('Lists', ListSchema)

module.exports = List