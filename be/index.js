const express = require('express');
const mongoose = require('mongoose');
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const PORT = 3000;
const app = express();
const myRouter = require('./routes/user');
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb://localhost:27017/distMgmt')
.then(()=>{return console.log('mongodb connected Successfully')})
.catch((err)=>{return console.log('Cant connect to database error occured')})


//routes
app.use('/', myRouter);

//connecting server 
app.listen(PORT, ()=>{return console.log('server connected')});