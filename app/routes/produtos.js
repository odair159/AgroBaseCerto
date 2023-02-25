module.exports = function(app){
  app.get('/produtos', function(req,res){
    app.app.controllers.produtos.produtos(app.res,res);
  });

  app.get('/produto', function(req,res){
    app.app.controllers.produtos.produto(app.res,res);
  })
}
        
   
