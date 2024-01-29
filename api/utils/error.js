//* Creating a function to handle error
/**
 * JavaScript code for error.js
 * 
 * This code exports a function called errorHandler that creates a new Error object
 * with the provided status code and message. It sets the properties of the Error object
 * and returns it.
 */

export const errorHandler = (statusCode,message)=>{
    const error = new Error();
    error.statusCode = statusCode;
    error.message = message;
    return error;
}