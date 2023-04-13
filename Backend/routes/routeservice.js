const express = require('express')
const serviceSchema = require ('../model/service')

const serviceRoute = express.Router()


serviceRoute.get('/getservice',async(req,res)=>{
  try{
      const ser = await serviceSchema.find()
      res.status(200).json({msg:'this is ur service list',ser})
  }catch(err){
      console.log(err)
  }
})



// Route pour créer un nouveau service
serviceRoute.post('/addservice', async(req, res) => {
    try{
   const newservice = new serviceSchema(req.body)
   await  newservice.save()
     res.status(200).json({msg:'you could add ur new service',newservice})
    }catch(err){
        console.log(err)
    }
})


// Route pour mettre à jour un service existant
serviceRoute.put('/updateservice/:id', async(req, res) => {
  try{
    const {id}=req.params
    const updateservice = await serviceSchema.findByIdAndUpdate(id,{$set:{...req.body}})

  // Retourner le service mis à jour avec un code HTTP 200 (OK)
  res.status(200).json({msg:"you could update me",updateservice})} catch(err){
    console.log(err)
  }
});

// Route pour supprimer un service existant
serviceRoute.delete('/deleteservice/:id',async (req, res) => {
  try { const { id } = req.params;
const deletservice =await serviceSchema.findByIdAndDelete(id)
  // Supprimer le service correspondant de la base de données ou effectuer toute autre opération nécessaire
  // Retourner un message de succès avec un code HTTP 204 (No Content)
  res.status(200).json({msg:'you deleted that service'})} catch(err){
    console.log(err)
  }
});


serviceRoute.get('/getservice/:id',async(req,res)=>{
  try{
      const {id}=req.params
      const getuniqueservice = await serviceSchema.findById(id)
      res.status(200).json({msg:'you found that service',getuniqueservice})
  }catch(err){
      console.log(err)
  }
})

module.exports= serviceRoute