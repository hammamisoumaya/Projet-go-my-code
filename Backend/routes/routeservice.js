const express = require('express')
const serviceSchema = require ('../model/service')

const serviceRoute = express.Router()


// Route pour créer un nouveau service
serviceRoute.post('/services', async(req, res) => {
    try{
   const newservice = new serviceSchema(req.body)
   await  newservice.save()
     res.status(200).json({msg:'you could add ur new service',newservice})
    }catch(err){
        console.log(err)
    }
})

// Route pour mettre à jour un service existant
serviceRoute.put('/services/:id', async(req, res) => {
  try{
    const {id}=req.params
    const updateservice = await serviceSchema.findByIdAndUpdate(id,{$set:{...req.body}})

  // Retourner le service mis à jour avec un code HTTP 200 (OK)
  res.json(serviceMaj)} catch(err){
    console.log(err)
  }
});

// Route pour supprimer un service existant
serviceRoute.delete('/services/:id', (req, res) => {
  try { const { id } = req.params;
const deletservice = serviceSchema.findByIdAndDelete(id)
  // Supprimer le service correspondant de la base de données ou effectuer toute autre opération nécessaire
  // Retourner un message de succès avec un code HTTP 204 (No Content)
  res.sendStatus(204)} catch(err){
    console.log(err)
  }
});

module.exports= serviceRoute