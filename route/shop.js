const { Router } = require('express');
const express = require('express');
const route = express.Router();
route.get('/',(req,res,next)=>{
    res.send('<h1>hello from Express js i am in another middlewarw</h1>')
});

module.exports=route;