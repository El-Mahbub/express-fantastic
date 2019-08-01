import Autoload from 'system/core/Autoload';
import Database from 'system/driver/Database';
import Config from 'system/core/Config';
class Fantastic {
    constructor() {
        this.config = new Config();
        this.database = this.database.bind(this);
        this.init();
    };
    init() {
        const modules = [new Autoload().generateAll()];
        const autoloaders = modules.reduce((a, b) => Object.assign(a, b), {});
        // Set
        Object.setPrototypeOf(Fantastic.prototype,autoloaders);
    };
    database(driver='mysql', name) {
        return new Database().connect(driver, name);
    };
};
export default Fantastic;