const mongoose = require('mongoose')
const connectdb=async()=>{
    try{
        await  mongoose.connect('mongodb+srv://Hammami-soumaya:50Pl3pyLXB56TI3T@cluster0.supdgew.mongodb.net/?retryWrites=true&w=majority')
    console.log('you are connected to the db ')
    }catch(err){
        console.log(err)
    }
    }
    
    module.exports=connectdb