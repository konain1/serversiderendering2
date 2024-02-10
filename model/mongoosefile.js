

const mongoose = require('mongoose')


const urlschema = new mongoose.Schema({
    id:String,
    orignalurl:String
    
})

const URL = mongoose.model('urldata',urlschema)



module.exports = URL