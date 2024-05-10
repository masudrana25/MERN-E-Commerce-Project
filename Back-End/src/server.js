const express = require('express')
const app = express()

// use morgan for know the user search wrong web address
const morgan = require('morgan')
app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.send('Welcome to Server Home Page')
})

// server running port , success and error message show
app.listen(3001, ()=>{
    console.log('server runnig in http://localhost:3001');
})