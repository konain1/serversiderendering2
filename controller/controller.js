
const shortid = require('shortid');
const URL = require('../model/mongoosefile')
async function getData(req,res){

    let urldata = await URL.find()
    // res.json(urldata)
    res.render('home',{urldata})
}

async function postData(req,res){
    let url = req.body.url;
    let id = shortid.generate()
   await URL.create({
        id:id,
        orignalurl:url
    })
  let newurl =  await URL.findOne({id : id})
  let urldata = await URL.find()

    res.render('home',{urldata})
}

module.exports = { postData,getData}