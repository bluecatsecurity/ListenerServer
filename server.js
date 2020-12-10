const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 3000;

//Parseo Body
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.get('/',(req,res,next)=>{
    res.statusCode = 200;
    console.log(req.query);
    res.send("SERVER OK");
    res.end();
});

app.get('/login',(req,res,next)=>{
    console.log(req.query)    
    res.send(req.query);
    
});

app.listen(PORT,()=>{
    console.log("Server listening on port: ",PORT);
});