import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import cors from 'cors';
import * as constant from 'src/configs/Constants';
import Routes from 'src/configs/Routes';
require('dotenv').config();
class Config {
    constructor() {
        this.AppName = 'Express Fantastic';
        this.AppVersion = '1.0.1';
        this.express = express;
        this.app = express();
        this.init = this.init.bind(this);
        this.onRunning = this.onRunning.bind(this);
        this.onListening = this.onListening.bind(this);
        this.onError = this.onError.bind(this);
        this.init();
    };
    init() {
        this.app.set('env', process.env.NODE_ENV);
        this.app.set('views', path.join(__dirname, '../../src/views'))
        this.app.set('view engine', constant.ViewEngine);
        this.app.set('trust proxy', constant.TrustProxy);
        constant.XPoweredBy ? this.app.enable('x-powered-by') : this.app.disable('x-powered-by');
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({extended: constant.UrlEncoded}));
        this.app.use(express.static(path.resolve(__dirname, '../../public')));
        this.app.use(Routes);
        this.app.get('env') !== 'production' ? this.app.use(morgan('dev')) : this.app.use(morgan('common'));
        this.app.use(cors(constant.Cors));
    };
    onRunning() {
        this.app.get('env') !== 'production' && console.log('Server running on http://localhost:'+process.env.PORT);
    };
    onListening(server) {
        let addr = '';
        typeof server.address() === 'string' ? 
            addr = 'pipe '+server.address() : 
                addr = 'port '+server.address().port;
        console.log('Listening on '+addr);
    };
    onError(server) {
        let addr = '';
        typeof server.address() === 'string' ? 
            addr = 'Pipe '+server.address() : 
                addr = 'Port '+server.address().port;
        if(error.syscall !== 'listen'){
            throw error;
        }
        else {
            switch (error.code) {
                case 'EACCES':
                    console.error(addr + ' requires elevated privileges');
                    process.exit(1);
                    break;
                case 'EADDRINUSE':
                    console.warn(addr + ' is already in use');
                    process.exit(1);
                    break;
                default:
                    throw error;
            }
        }
    };
};
export default Config;