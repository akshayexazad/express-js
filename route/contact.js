const path=require('path')
const express = require('express');
const route = express.Router();


route.get('/contactus',(req,res,next)=>{
    res.sendFile(path.join(__dirname,'../','view','contactus.html'));
});
route.post('/contactus',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/message')
});


module.exports=route;