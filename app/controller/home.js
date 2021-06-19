const Controller = require("egg").Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.set("Access-Control-Allow-Origin", "*")
        this.ctx.body = "hello world!";
    }
}

module.exports = HomeController;