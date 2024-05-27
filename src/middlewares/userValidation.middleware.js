/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : To handle the user input validations
 *
 * @description
 *
 * @file        : middlewares/userValidation.middleware.js
 * @overview    : Handles the user input validations for registration and login
 * @module      : this is necessary to validate the user inputs
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

// imports
import { body, validationResult } from "express-validator";

class UserValidations {

  /**
   * To validate registration form.
   * @returns error message on error. 
   */
  static validateRegister = async (req, res, next) => {
    try {
      await body("name").notEmpty().withMessage("Name is required").run(req);
      await body("email")
        .notEmpty()
        .isEmail()
        .withMessage("Email is required")
        .run(req);
      await body("password")
        .notEmpty()
        .withMessage("Password is required")
        .run(req);

      const validationResults = validationResult(req);
      if (validationResults.array().length > 0) {
        return res.render("/error", {
          errorMessage: validationResults.array()[0].msg,
        });
      }
      return next();
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * To validate login form. 
   * @returns error message on error.
   */
  static validateLogin = async (req, res, next) => {
    try {
      await body("email")
        .notEmpty()
        .isEmail()
        .withMessage("Email is required")
        .run(req);
      await body("password")
        .notEmpty()
        .withMessage("Password is required")
        .run(req);

      const validationResults = validationResult(req);
      if (validationResults.array().length > 0) {
        return res.render("/error", {
          errorMessage: validationResults.array()[0].msg,
        });
      }
      return next();
    } catch (error) {
      console.log(error);
    }
  };
}

export default UserValidations;
