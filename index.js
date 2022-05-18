var express = require("express"); 
var app = express();
var { usuario } = require("./models");
var { empresa } = require("./models");

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}))

/* Usuários */
app.get("/usuarios", async function(req, res){
  var aparece = await usuario.findAll();
  res.json(aparece)
});
app.post("/usuarios", function(req, res){
  var resultado = usuario.create(req.body);
  res.json(resultado);
});
app.put("/usuarios/:id", function(req, res){
  var atualizando = usuario.update(req.body, {where: {id: req.params.id} });
  res.json(atualizando);
});
app.delete("/usuarios/:id", function(req, res){
  var deletando = usuario.destroy({where: {id: req.params.id} });
  res.json(deletando);
});
/* Mostrar a qual empresa os usuários pertencem */
app.get("/usuarios/:id/empresa", async function(req, res){
  let resultado = await usuario.findByPk(req.params.id, {
    include: 'empresa'
  });
  res.json(resultado.empresa);
});

/* Empresas */
app.get("/empresas", async function(req, res){
  var aparece = await empresa.findAll();
  res.json(aparece)
});
app.post("/empresas", function(req, res){
  var resultado = empresa.create(req.body);
  res.json(resultado);
});
app.put("/empresas/:id", function(req, res){
  var atualizando = empresa.update(req.body, {where: {id: req.params.id} });
  res.json(atualizando);
});
app.delete("/empresas/:id", function(req, res){
  var deletando = empresa.destroy({where: {id: req.params.id} });
  res.json(deletando);
});
/* Mostrar a qual usuário a empresa pertence */
app.get("/empresas/:id/usuarios", async function(req, res){
  let resultados = await empresa.findByPk(req.params.id, {
    include: 'usuarios'
  });
  res.json(resultados.usuarios);
});

app.listen(3000, function(){
  console.log("Tudo certo")
})