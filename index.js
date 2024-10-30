require('dotenv').config()
const express = require('express')
const app = express()
const port=process.env.port

app.get('/', (req, res) =>{
  res.send('Hello World')
})

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