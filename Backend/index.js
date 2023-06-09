const express = require('express')
const cors = require ('cors')
const connectdb= require ('./config/connectdb')
const userRoute = require('./routes/routeuser')
const serviceRoute = require('./routes/routeservice');
const messageRoute = require('./routes/routemessage')
const carrerRoute = require ('./routes/routecareer')
const app = express()
const port = 4000
require ('dotenv').config()




app.use(express.json())
app.use(cors())

//partie connection db
connectdb()

//path principale de l'authentification
app.use('/auth',userRoute)



app.use('/services', serviceRoute);


app.use('/message', messageRoute);


app.use('/career', carrerRoute);




app.listen(port,err=>{
    err?console.log(err):console.log(`you are connected to the port: ${port}`)
})