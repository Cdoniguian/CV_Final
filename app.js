// ************ Require's ************
const express = require('express');
const path = require('path'); 
const puerto = 3032;
const app = express();
const methodOverride =  require('method-override'); // Pasar poder usar los métodos PUT y DELETE
//------------------------------------------------------------
app.use(express.static('public'));   //para capturar la info de un formulario via POST
app.use(express.urlencoded({extended: true}));
// Routers ------------------------------------------------------

app.get('/', (req,res)=>{res.sendFile(path.join(__dirname , './views/index.html'))})
app.get('/about', (req,res)=>{res.sendFile(path.join(__dirname , './views/about.html'))})
app.get('/contact', (req,res)=>{res.sendFile(path.join(__dirname , './views/contact.html'))})
app.get('/studies', (req,res)=>{res.sendFile(path.join(__dirname , './views/studies.html'))})
app.get('/myJob', (req,res)=>{res.sendFile(path.join(__dirname , './views/myJob.html'))})

// ---------------se atiende al puerto--------------
    app.listen(puerto, ()=>{
        console.log("Esta corriendo en el puerto " + puerto);
    });
    module.exports = app;