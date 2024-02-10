
const mongoose = require('mongoose')

const express = require('express')
const router = require('./routes/routes')

mongoose.connect('mongodb+srv://konain7:Kaunain%4099@cluster0.rmyvhx6.mongodb.net/serverside2')




const app = express();

app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use('/',router)

app.set('view engine' , 'ejs')



app.listen(4013,()=>console.log('server 4013'))