const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userModel = require('./models/userSchema')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://crud-mern-app:7QWe9jeqd2rzrelK@crud-app.u5e0j.mongodb.net/?retryWrites=true&w=majority&appName=crud-app')

app.post('/createUser',(req,res)=>{
    userModel.create(req.body)
    .then(user=> res.json(user))
    .catch(err => res.json(err))
})

app.get('/',(req,res)=>{
    userModel.find({})
    .then(users=> res.json(users))
    .catch(err=> res.json(err))
})

app.get('/getUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findById({_id:id})
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})

app.put('/updateUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndUpdate({_id:id},{userName:req.body.userName, userEmail:req.body.userEmail, userAge:req.body.userAge})
    .then(user=> res.json(user))
    .catch(err=> res.json(err))
})

app.delete('/deleteUser/:id',(req,res)=>{
    const id = req.params.id;
    userModel.findByIdAndDelete({_id:id})
    .then(user=> res.json(user))
    .catch(err => res.json(err))
})

app.listen('3001',()=>{
    console.log("server is running at 3001")
})