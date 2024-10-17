// let file = "Note.txt";
// fetch(file)
// .then(x => x.text())
// .then(y => document.getElementById("demo").innerHTML = y);

// var express = require('express'); 
//  var app = express(); 

//  app.get("/", function(req,res){
//         res.send('kjo eshte faqja kruesore')
// });

 
//  app.get("/rrethnesh", function(req,res){
//     res.send('kjo eshte nje faqe rreth nesh')
// });

// app.get("/login", function(req,res){
//     res.send('ketu behesh login')
// });
// app.listen(3000,()=>{

// })

var express = require('express'); 
const cors = require('cors');
var app = express(); 

app.use(cors());

app.use(express.static('public'));

 app.get("/home", function(req,res){
         res.send('kjo eshte faqja kruesore')
 });

 
  app.get("/about", function(req,res){
     res.send('kjo eshte nje faqe rreth nesh')
 });

 app.get("/Conctact", function(req,res){
     res.send('ketu behesh login')
 });

 app.listen(2020,()=>{
console.log('server is running on port 2020')
 })