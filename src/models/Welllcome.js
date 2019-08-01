/* Model class */

/**
 * Import Fantastic class and other classes
 */

import Fantastic from 'system/core/Fantastic';

/* Class name */

class Wellcome extends Fantastic {
    constructor(){
        super();

        /**
         * Call the database with this.database('Your database'), if empty 'db_default' will be called.
         * This will returning the existing database driver.
         * Example :
           this.connection = this.database();
           this.sql = this.connection;
         */

        this.connection = this.database();
        this.sql = this.connection;

        /**
         * Creating a data model corresponding to the database.
         * Example :
         * this.data = {
            table: 'users',
            primary: 'id_user',
            data1: 'username',
            data2: 'email',
            data3: 'phone',
            data4: 'village',
            data5: 'district',
            data6: 'province',
            data7: 'country',
            data8: 'zip_code',
            data9: 'password',
            data10: 'photo_profile',
            data11: 'site',
            data12: 'description',
            data13: 'stars',
            data14: 'active',
            data15: 'blocked',
            data16: 'join_at',
        };
         */
    };

    /**
     * Creating a method/property function for this model.
     * @param {*} callback will returning a data. 
     * Example :
     * readAll(callback) {

        // Example with mysql driver.

            const self = this;
            this.sql.query(" SELECT * FROM "+this.data.table+" ORDER BY "+this.data.primary+" DESC ",function(error,result,fields){
                if(error) return self.isFunction(callback) ? callback(error,null) : error;
                return self.isFunction(callback) ? callback(null,result) : result;
            });

        };
     */
};

/**
 * Exporting this model.
 */

export default Wellcome;