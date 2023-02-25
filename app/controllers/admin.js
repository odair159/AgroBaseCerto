module.exports.formulario_inclusao_produtos = function(app, req, res){
    res.render("admin/form_add_produtos.ejs", {produto:{}});
}

module.exports.produtos_salvar = function(app, req, res){
    var produto = req.body;
       
        var connection = app.config.dbConnection();
        var produtosModel = new app.app.models.ProdutosDAO(connection);

        produtosModel.salvarProduto(produto,function(error,result){
            res.redirect('/produtos');
        });
}

   

       
