const express = require('express')


const userRoute = express.Router()

const {register,login,userUpdate,getAll}=require('../controller/userControllers')
//middel 
const  {registerValidation,logvalidation,validation} = require('../middelwars/RegisterValidation')
//partie auth middel ware 
const {isAuth} = require('../middelwars/isAuth')

//partie auth 


userRoute.post('/register',registerValidation,validation,register)

//partie post login 


userRoute.post('/login',logvalidation,validation,login)


userRoute.put('/update/:id',isAuth,userUpdate)


userRoute.get('/uracount',isAuth,(req,res)=>{
    res.send(req.user)

})

userRoute.get('/all',getAll)




module.exports= userRoute