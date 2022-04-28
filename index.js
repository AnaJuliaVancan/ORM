var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", function(req, res){
  var aparece = await usuario.findAll();
  res.json(aparece)
});
app.post("/", function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.listen(3000, function(){
  console.log("Tudo ")
})