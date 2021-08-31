const express = require("express");
const app = express();
var calculadoraRoute = require('./routes/calculadoraRoute');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.set("view engine", "ejs");

app.use('/calculadora', calculadoraRoute);

app.listen("3000", function(){
    console.log("Projeto funcionando!");
});