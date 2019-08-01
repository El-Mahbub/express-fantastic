import path from 'path';
import * as autoloader from 'src/configs/Autoloaders';
import fs from 'fs';
class Autoload {
    constructor() {
        this.models = [];
        this.helpers = [];
        this.libraries = [];
        this.init();
        this.generateAll = this.generateAll.bind(this);
    }
    init() {
        const models = [];
        const getModels = (paths,files) => {
            fs.readdirSync(paths).forEach(file => {
                if(fs.statSync(path.join(paths,'/'+file)).isDirectory()){
                    getModels(path.join(paths,'/'+file),files);
                }
                else if(fs.statSync(path.join(paths,file)).isFile() && file.search(/\.js$/)) {
                    models.push(require(path.join(paths,'/'+file)).default);
                }
            });
        };
        getModels(path.join(__dirname,'../../src/models/'),models);
        // Models
        this.models = autoloader.models.length > 0 ?
        models.map((e,i) =>
           autoloader.models.indexOf(e.name) != -1 && { Model: { [e.name] : e } }
        ) :
        [];
        // Helpers
        this.helpers = (autoloader.helpers.length > 0 ) ?
        autoloader.helpers.map((e,i) =>
            fs.statSync(path.join(__dirname,'../../src/helpers/'+e.replace(/\.js$/g,'')+'.js')).isFile() && ({ Helper: { [e] : require(path.join(__dirname,'../../src/helpers/') + [e.replace(/\.js$/g,'')]) } })
        ) :
        [];

        // Libraries
        this.libraries = (autoloader.libraries.length > 0) ?
        autoloader.libraries.map((e,i) =>
            fs.statSync(path.join(__dirname,'../../src/libs/'+e.replace(/\.js$/g,'')+'.js')).isFile() && ({ Library: { [e] : require(path.join(__dirname,'../../src/libs/').default + [e.replace(/\.js$/g,'')]) } })
        ) :
        [];
    }
    generateAll(){
        const models = this.models.length > 0 ? { Model: this.models.map((e,i) => Object.keys(e).filter(w => w === 'Model') && {...e.Model}).reduce((a, b) => Object.assign(a, b), {}) } : null,
        helpers = this.helpers.length > 0 ? { Helper: this.helpers.map((e,i) => Object.keys(e).filter(w => w === 'Helper') && {...Object.values(e.Helper).reduce((a,b) => Object.assign(a,b),{})}).reduce((a, b) => Object.assign(a, b), {}) } : null,
        libraries = this.libraries.length > 0 ? this.libraries.reduce((a, b) => Object.assign(a, b), {}) : null;
        return ({...models, ...helpers, ...libraries});
    }
}
export default Autoload;