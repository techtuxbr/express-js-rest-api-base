class HomeController{

    async index(req, res){
        res.send("APP EXPRESS! - Guia do programador");
    }

}

module.exports = new HomeController();