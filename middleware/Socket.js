const socketIo = require("socket.io");

/**
 * classe para criar a conexao do socket io
 */
class Socket {
    constructor(server) {
        // salva a instancia da conexao na propriedade
        this.io = socketIo(server);
        this.addListeners();
    }

    /**
     * adiciona os primeiros listeners do socket
     */
    addListeners() {
        // adiciona o listener para cada conexao nova
        this.io.on("connection", (socket) => {
            // mostra quantos clientes estao conectados no momento
            console.log(this.clientCount() + " clients connected.");

            // adiciona o listener para desconexao
            socket.on("disconnect", () => {
                // mostra quantos clientes estao conectados no momento
                console.log(this.clientCount() + " clients connected.");
            });
        });
    }

    /**
     * Middleware para adicionar a conexao por socket ao request para ser usado em outras partes do app
     * @param {Request} req a requisicao para armazenar o socket
     * @param {Response} _res a resposta
     * @param {Function} next passar para o proximo handler
     */
    middleware(req, _res, next) {
        // adiciona o socket ao request
        req.io = this.io;

        // chama o proximo handler
        next();
    }

    // pega a quantidade de clientes conectados no momento
    clientCount() {
        // quantidade de chaves no objeto de sockets connectados
        return Object.keys(this.io.sockets.connected).length;
    }
}

module.exports = Socket;