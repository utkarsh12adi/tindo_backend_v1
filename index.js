require('dotenv').config()
import mongoose from 'mongoose'
const express = require('express')
const app = express()
const port=process.env.port

app.get('/', (req, res) =>{
  res.send('Hello World')
})


(async ()=>{
 try{
    await mongoose.connect(`${process.env.MONGO_URI}`)

 }
 
 catch(error){
    console.error("ERROR",error)
    throw err
 }
})()











app.get('/twitter',(req,res)=>{
    res.send("<h1>Twitter</hnpm i dotenv1>")
})

app.get('/login',(req,res)=>{
    res.send("<h1>Please login !!</h1>")
})
app.get('/register',(req,res)=>{
    res.send("<h1>Please Register !!</h1>")
})

app.listen(process.env.port,()=>{
    console.log(`App listening on ${port}`)
})