const express = require('express')

const carrerRoute = express.Router()

const CareerSchema= require('../model/career')


carrerRoute.get('/getcareer',async(req,res)=>{
    try{
        const carr = await CareerSchema.find()
        res.status(200).json({msg:'this is ur career list',carr})
    }catch(err){
        console.log(err)
    }
})


carrerRoute.post('/addcareer',async(req,res)=>{
    try{
   const newCarrer =await new CareerSchema(req.body)
    newCarrer.save()
     res.status(200).json({msg:'you could add ur new contact',newCarrer})
    }catch(err){
        console.log(err)
    }
})

carrerRoute.put('/updatecarrer/:id',async(req,res)=>{
    try{
const {id}=req.params
const updatecareer = await  CareerSchema.findByIdAndUpdate(id,{$set:{...req.body}})
res.status(200).json({msg:"you could update me",updatecareer})
    }catch(err){
        console.log(err)
    }
})

carrerRoute.delete('/deletecareer/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const deletecareer = await CareerSchema.findByIdAndDelete(id)
        res.status(200).json({msg:'you deleted that user'})
    }catch(err){
        console.log(err)
    }
})

carrerRoute.get('/getcareer/:id',async(req,res)=>{
    try{
        const {id}=req.params
        const getuniquecareer = await CareerSchema.findById(id)
        res.status(200).json({msg:'you found that user',getuniquecareer})
    }catch(err){
        console.log(err)
    }
})




module.exports= carrerRoute