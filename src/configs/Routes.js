import express from 'express';
/**
 * You can import your controller here
 */
import Wellcome from 'src/controllers/Wellcome';
const Routes = express.Router();

Routes.get('/', (req, res, next) => {
    new Wellcome(res).hello();
});

export default Routes;