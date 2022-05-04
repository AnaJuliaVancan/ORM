var express = require("express");
var app = express();
var { usuario } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

app.get("/", async function(req, res){
  var aparece = await usuario.findAll();
  res.json(aparece)
});
app.post("/", function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});
app.put("/:id", function(req, res){
  var atualizando = usuario.update(req.body, {where: {id: req.params.id} });
  res.json(atualizando);
});
app.delete("/:id", function(req, res){
  var deletando = usuario.destroy({where: {id: req.params.id} });
  res.json(deletando);
});

app.listen(3000, function(){
  console.log("Tudo certo")
})