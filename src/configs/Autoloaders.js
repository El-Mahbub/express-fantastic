/**
 * Autoloader class
 */

/**
 * This config contains your models, helpers and libraries. You should insert them to this if you want to use.
 * Example :
 * const models = ['Users','Store'];
 */

export const models = ['Wellcome', 'Users'];
export const helpers = [];
export const libraries = [];


/**
 * After inserting your modules, you can call them as follow :
 * 
 * - Model: this.Model.YourModelClass
 * - Helper: this.Helper.YourHelperClass
 * - Library: this.Library.YourLibraryClass
 * 
 * Note: - All value was inserted must be similiar with file name and class name.
 *       - Different between helper and library: if the helper is used for common cases only when library otherwise and helper is smaller than library.
 */