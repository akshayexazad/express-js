// let http = require('http');
const express = require('express')
const app = express();
const bodyParser = require('body-parser');

const adminRoute=require('./route/admin');

const shoproute= require('./route/shop')


// let route = require('./router')
app.use(bodyParser.urlencoded({extended:false}))

app.use('/admin',adminRoute);
app.use(shoproute);
app.use((req,res,next)=>{
    res.status(404).send('<h1>page not found</h1>')
})

app.listen(5001);

// let server = http.createServer(app);
// server.listen(5001),()=>{
//     console.log("http://localhost5001")
// };
