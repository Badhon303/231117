var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
var fs = require("fs");
var mongojs = require('mongojs');


var db = mongojs("mongodb://badhon:123456@ds255265.mlab.com:55265/badhon",['alu']);
// app.get('/', (req, res)=> {
//   res.send("Hi.... !!");
// });

app.get('/Temp', (req, res)=> {
  res.send("Hi Temp .... !!");
});

app.get('/Light', (req, res)=> {
  res.send("Hi Light.... !!");
});

app.get('/Sound', (req, res)=> {
  res.send("Hi Sound.... !!");
});


app.listen(3000,()=>{
    console.log("listening to 3000 port");
  });


  app.get('/', (req, res)=> {
    db.alu.find((err,docs)=>{
      res.send(docs) ;
    })
  }); 
  