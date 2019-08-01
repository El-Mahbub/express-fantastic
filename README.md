# express-fantastic
Minimalist MVC concept for express

### Features :
- Support es6 syntax with babel
- Very customizable
- Very leightweight

### Install :
Clone or download this repository, cd into it and then : "npm install".
You can add another modules as you want.

### Directory important :
List of directory and files are important :
- Router: configs/Routes.js.
- Controller: controllers/YourControler.js
- Model: models/YourModel.js
- View: views/yourView.ejs
- system/core/Configs.js : A file for all configuration.
- system/core/Autoload.js : A file for autoloading models, helpers and etc from src/configs/Autoloader.js.
- system/core/Server.js : A file for running express framework.
- system/core/Fantastic.js : A file will be extended in controllers and models and it will returning all of 3 above files.

### License : MIT

