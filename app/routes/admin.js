module.exports = function(app){
    app.get('/formulario_inclusao_produtos',function(req,res){
        app.app.controllers.admin.formulario_inclusao_produtos(app,req,res);
    });
    app.post('/produtos/salvar',function(req,res){
        app.app.controllers.admin.produtos_salvar(app,req,res)
        });
       
        
}
        