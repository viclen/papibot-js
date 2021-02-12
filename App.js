const express = require("express");
const http = require("http");
const routes = require("./routes/index");
const Socket = require("./middleware/Socket");
const dotenv = require('dotenv');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser')

if (dotenv.config({
    path: `env/${process.env.NODE_ENV}.env`
}).error) {
    throw new Error(`Verify that .env file exists in the env folder`);
}

class App {
    constructor() {
        // cria o express
        this.app = express();

        // criar o servidor http
        this.server = http.createServer(this.app);

        // middleware para conexao de origem diferente
        this.app.use(cors());

        // middleware para aumentar a seguranca da aplicao nos request/response
        this.app.use(helmet());

        // cria uma instancia socket para usar de middleware
        let socket = new Socket(this.server);
        // adicionar o socket como middleware
        this.app.use(socket.middleware.bind(socket));

        this.app.use(bodyParser.json());

        // adiciona as rotas
        this.app.use(routes);
    }
}

module.exports = new App();