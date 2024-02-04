/*

 * This code defines the routes for user-related operations.
 * It imports the necessary modules and sets up a router object.
 * The router object handles GET requests for the '/test' endpoint,
 * which is handled by the 'test' function from the user.controller.js file.
 * Finally, the router object is exported to be used in other files.
 */



import express from 'express';
import {test,getUserListings} from '../controllers/user.controller.js'
import { updateUser,deleteUser } from '../controllers/user.controller.js';
import {verifyToken} from '../utils/verifyUser.js';



const router = express.Router();


router.get('/test',test);
router.post('/update/:id',verifyToken,updateUser)
router.delete('/delete/:id',verifyToken,deleteUser);
router.get('/listings/:id',verifyToken,getUserListings);


// This line of code exports the router object to be used in other files. 
export default router;