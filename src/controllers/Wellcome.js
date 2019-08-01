/* Controller class */

/**
 * Import Fantastic class and other classes
 */

import Fantastic from 'system/core/Fantastic';

/* Class name */

class Wellcome extends Fantastic {
  constructor(res){
    super(res);
    
    /** 
     * Creating a data for a view
     */
    this.response = res;
    this.data = {
      styleCss: process.env.APP_URL+'/css/style.css', // Just example for loading css with sending a data to view.
      logo: process.env.APP_URL+'/img/logo.png',
      title: 'Wellcome',
      heading: 'ExpressFantastic',
      message: 'Minimalist but fantastic MVC concept for express with babel.',
      info: 'This page located in views/wellcome.ejs called by controllers/Wellcome.js'
    };
    
    // Creating a property function.

    /**
     * Here or in the method, you can call your view with :
     * 
     * this.response.render('your view', this.data);
     * 
     * Or call your model with :
     * 
     * this.Model.YourModelClass();
     * 
     * Example :
     * 
      const self = this, model = new this.Model.Users();
      return model.readAll(function(err,data){
        return self.json(data); // Sending an Api with this.json() method.
      });

     * Or call a helpers, libraries, databases (But for the best practice call your database in the model class instead) and etc.

     */

  };

  // This property function called by route.

  hello(){

    // Rendering a view with this.response.render() like res.render() in express;
    console.log(this.Model);
    this.response.render('wellcome',this.data);

  };

};

/**
 * Exporting this controller module
 */

export default Wellcome;