const mongoose = require('mongoose')

const CareerSchema = mongoose.Schema({

    name:String,
    description:String


})

module.exports = mongoose.model('Career',CareerSchema)