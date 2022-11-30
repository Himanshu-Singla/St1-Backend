module.exports = config = {
    PORT: 8000,
    dbName: "react_blog",
    dbUrl: function(){
        return "mongodb://127.0.0.1:27017/st1"+this.dbName
    }
}
