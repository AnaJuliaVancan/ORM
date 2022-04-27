var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", function(req, res){
  res.send("teste")
});
app.post("/", function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});

app.listen(3000, function(){
  console.log("UoU")
})