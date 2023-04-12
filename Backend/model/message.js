const mongoose = require('mongoose')

const messageSchema = new mongoose.Schema({
    name:String,
    sujet:String,
    email:{
        type:String,
        require:true,
        unique: true
    }     


})

module.exports = mongoose.model('message',messageSchema)