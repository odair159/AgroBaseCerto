function ProdutosDAO(connection){
    this._connection=connection;
}
ProdutosDAO.prototype.getProdutos = function(callback){
    this._connection.query('select*from agrobase',callback);
}
ProdutosDAO.prototype.getProdutos = function(callback){
    this._connection.query('select*from agrobase = 2',callback);
}
ProdutosDAO.prototype.salvarProduto = function(produto, callback){
    this._connection.query('insert into agrobase set ?',produto, callback)
}
module.exports = function(){
        return ProdutosDAO;
}