const express = require('express')
const app = express()

// use morgan for know the user search wrong web address
const morgan = require('morgan')
app.use(morgan('dev'))

// get request in home page of server
app.get('/',(req,res)=>{
    res.send('Welcome to Server Home Page')
})

// test request
app.get('/test', (req,res)=>{
    res.status(200).send({
        message : 'Get : This is test message of test site.'
    })
})

app.put('/test', (req,res)=>{
    res.status(200).send({
        message : 'Put : This is test message of test site.'
    })
})

app.delete('/test', (req,res)=>{
    res.status(200).send({
        message : 'Delete : This is test message of test site.'
    })
})

app.post('/test', (req,res)=>{
    res.status(200).send({
        message : 'Post : This is test message of test site.'
    })
})

// server running port , success and error message show
app.listen(3001, ()=>{
    console.log('server runnig in http://localhost:3001');
})