/** Configuration Databases
 * -------------------------------------------------------------------------
*/

require('dotenv').config();
/**
 * Mysql
 * See for details : https://github.com/mysqljs/mysql
 */

export const Databases = {
    mysql: {
        hostname    : process.env.DB_HOST,
        port        : process.env.DB_PORT,
        username    : process.env.DB_USER,
        password    : process.env.DB_PASSWORD,
        database    : process.env.DB_DATABASE,
        charset     : 'utf8_unicode_ci',
        ssl         : false,/*{
            ca      : ''
        },*/
        localAddress: '',
        insecureAuth: false,
        queryFormat : false,
        sokcetPath  : null,
        debug       : false,
        trace       : true,
        timezone    : 'local',
        timeout     : 10000, // Connect timeout
        stringify   : false, // Stringify objects
    },
};


/**
 * Exporting databases module
 */
