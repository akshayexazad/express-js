// let http = require('http');
const express = require('express')
const app = express();

// let route = require('./router')
app.use((req,res,next)=>{
    console.log("i am in middlewere1")
    next()
});
app.use((req,res,next)=>{
    console.log("i am in middlewere2")
    res.send('<h1>hello from Express js</h1>')
});

app.listen(5001);

// let server = http.createServer(app);
// server.listen(5001),()=>{
//     console.log("http://localhost5001")
// };
