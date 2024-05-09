const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send('Welcome to Server Home Page')
})

app.listen(3001, ()=>{
    console.log('server runnig in http://localhost:3001');
})