const express = require('express')

const messageRoute = express.Router()

const messageSchema= require('../model/message')




messageRoute.get('/getmessage',async(req,res)=>{
    try{
        const message = await messageSchema.find()
        res.status(200).json({msg:'this is ur message ',message})
    }catch(err){
        console.log(err)
    }
})

// POST request to send a message
// Route pour créer un nouveau service
messageRoute.post('/postmessage', async(req, res) => {
    try{
   const newmessage = new messageSchema(req.body)
   await  newmessage.save()
     res.status(200).json({msg:'you could add ur new message',newmessage})
    }catch(err){
        console.log(err)
    }
})




// DELETE request to delete a message
messageRoute.delete('/deletemessage/:id', (req, res) => {
    try { const { id } = req.params;
  const deletmessage = messageSchema.findByIdAndDelete(id)
    // Supprimer le service correspondant de la base de données ou effectuer toute autre opération nécessaire
    // Retourner un message de succès avec un code HTTP 204 (No Content)
    res.sendStatus(204)} catch(err){
      console.log(err)
    }
  });
  messageRoute.get('/getmessage/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getuniquemessage = await messageSchema.findById(id)
        res.status(200).json({msg:'you found that user',getuniquemessage})
    }catch(err){
        console.log(err)
    }
})

module.exports= messageRoute