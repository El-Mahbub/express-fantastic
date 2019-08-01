import path from 'path';
import crypto from 'crypto';
import { Databases } from 'src/configs/Databases';
class Database {
    constructor() {
        this.driver
        this.connect = this.connect.bind(this);
    };
    connect(driver, name) {
        const db_driver = Databases[driver];
        switch(db_driver) {
            case 'mysql':
                const { hostname, username, port, password, database, charset, ssl, localAddress, insecureAuth, queryFormat, sokcetPath, debug, trace, timezone, timeout, stringify } = db_driver;

                // Import mysql module
                const mysql = require('mysql');
                
                // Create a connection for mysql
                const connection = mysql.createConnection({
                    host            : hostname,
                    user            : username,
                    port            : port,
                    password        : password,
                    database        : database || name,
                    charset         : charset,
                    ssl             : ssl,
                    localAddress    : localAddress,
                    insecureAuth    : insecureAuth,
                    queryFormat     : queryFormat,
                    sokcetPath      : sokcetPath,
                    debug           : debug,
                    trace           : trace,
                    timezone        : timezone,
                    connectTimeout  : timeout,
                    stringifyObjects: stringify
                });
    
                // Displaying status connect
                connection.connect(function(error){
                    if(error) console.error(error,' Can\'t connecting to database');
                    else console.log('Database connected');
                });
    
                return connection;
            case 'nedb':
                const Storedata = require('nedb');
                try {
                    let db = {};
                    const filename = path.join(__dirname,'../../../public/'+name+'.db');
                    db[name] = new Storedata({
                        filename: path.join(__dirname,'../../../public/'+name+'.db'),
                        autoload: true
                    });
                    return db[name];
                } catch(error) {
                    console.error(error);
                    return;
                }
            default:
                return console.info("Db driver not exists");
        }
    };
};
export default Database;