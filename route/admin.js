const express = require('express');
const route = express.Router();

route.get('/my-product',(req,res,next)=>{
    res.send('<form action="/admin/my-product" method="POST"> <input type= "text" name="title"> <input type= "text" name="title"><button type="submit">Add Product</button></form>')
});
route.post('/my-product',(req,res,next)=>{
    console.log(req.body)
    res.redirect('/')
});


module.exports=route;