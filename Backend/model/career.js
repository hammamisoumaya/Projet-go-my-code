const mongoose = require('mongoose')

const CareerSchema = mongoose.Schema({

    name:String,
    description:String


})

const Career = mongoose.model('Career', CareerSchema);

module.exports = Career;