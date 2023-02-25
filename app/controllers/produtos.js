module.exports.produtos = function(app, req, res){
    var connection = app.config.dbConnection();
    var produtosModel= new app.app.models.ProdutosDAO(connection);
  
  produtosModel.getProdutos(function(error,result){
      res.render("produtos/produtos.ejs", {produtos: result});
   });
  };

  module.exports.produto = function(app, req ,res){
  var connection = app.config.dbConnection();
  var produtosModel= new app.app.models.NoticiasDAO(connection);
  
  produtosModel.getProduto (function(error,result){
  res.render("produtos/produto.ejs", {produto: result});
  });
  
  };