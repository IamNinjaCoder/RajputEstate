// This is a JavaScript file named auth.controller.js.

import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';

/**
 * Creates a new user with the provided username, email, and password.
 * Hashes the password using bcryptjs and saves the user to the database.
 * Returns a success message if the user is created successfully.
 * Otherwise, passes the error to the error handler middleware.
 */
export const signup = async (req, res, next) => {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json("User created successfully!");
    } catch (error) {
        next(error);
    }
};