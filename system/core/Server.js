import http from 'http';
import Config from 'system/core/Config';
require('dotenv').config();
class Server extends Config {
    constructor() {
        super();
        this.runServer = this.runServer.bind(this);
        this.runServer();
    };
    runServer() {
        const server = http.createServer(this.app);
        this.app.listen(process.env.PORT, process.env.HOST, 511, () => this.onRunning());
        this.app.on('listening', () => this.onListening(server));
        this.app.on('error', () => this.onError(server));
    };
};
new Server();
export default Server;