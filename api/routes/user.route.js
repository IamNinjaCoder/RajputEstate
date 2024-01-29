/*

 * This code defines the routes for user-related operations.
 * It imports the necessary modules and sets up a router object.
 * The router object handles GET requests for the '/test' endpoint,
 * which is handled by the 'test' function from the user.controller.js file.
 * Finally, the router object is exported to be used in other files.
 */



import express from 'express';
import {test} from '../controllers/user.controller.js'
const router = express.Router();


router.get('/test',test);


// This line of code exports the router object to be used in other files. 
export default router;