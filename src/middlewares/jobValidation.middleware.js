/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : User input data validation
 *
 * @description
 *
 * @file        : middlewares/jobValidation.middleware.js
 * @overview    : validates user input data
 * @module      : this is necessary to validate user input data
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

// imports
import { body, validationResult } from "express-validator";

class JobsValidations {
  /**
   * To validate the job creating form. 
   * @returns error message on error.
   */
  static newJobValidator = async (req, res, next) => {
    try {
      await body("category")
        .notEmpty()
        .withMessage("Category required")
        .run(req);
      await body("designation")
        .notEmpty()
        .withMessage("Destination required")
        .run(req);
      await body("location")
        .notEmpty()
        .withMessage("Location required")
        .run(req);
      await body("name")
        .notEmpty()
        .withMessage("Company name required")
        .run(req);
      await body("salary").notEmpty().withMessage("Salary required").run(req);
      await body("positions")
        .notEmpty()
        .isInt({ gt: 0 })
        .withMessage("Available positions should be positive")
        .run(req);
      await body("skills").notEmpty().withMessage("Skills required").run(req);
      await body("lastDate")
        .notEmpty()
        .withMessage("Last Date required")
        .run(req);

      const validationResults = validationResult(req);
      if (validationResults.array().length > 0) {
        return res.render("error", {
          errorMessage: validationResults.array()[0].msg,
        });
      }

      return next();
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * To validate job updating form. 
   * @returns error message on error.
   */
  static updateJobValidator = async (req, res, next) => {
    try {
      await body("category")
        .notEmpty()
        .withMessage("Category required")
        .run(req);
      await body("designation")
        .notEmpty()
        .withMessage("Destination required")
        .run(req);
      await body("location")
        .notEmpty()
        .withMessage("Location required")
        .run(req);
      await body("name")
        .notEmpty()
        .withMessage("Company name required")
        .run(req);
      await body("salary").notEmpty().withMessage("Salary required").run(req);
      await body("positions")
        .notEmpty()
        .isInt({ gt: 0 })
        .withMessage("Available positions should be positive")
        .run(req);
      await body("skills").notEmpty().withMessage("Skills required").run(req);
      await body("lastDate")
        .notEmpty()
        .withMessage("Last Date required")
        .run(req);

      const validationResults = validationResult(req);
      if (validationResults.array().length > 0) {
        return res.render("error", {
          errorMessage: validationResults.array()[0].msg,
        });
      }

      return next();
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * To validate the job applying form. 
   * @returns error message on error
   */
  static applyJobValidator = async (req, res, next) => {
    try {
      await body("name").notEmpty().withMessage("Name is required").run(req);
      await body("email")
        .notEmpty()
        .isEmail()
        .withMessage("Email is required")
        .run(req);
      await body("contact").notEmpty().withMessage("Contact required").run(req);
      await body("name")
        .notEmpty()
        .withMessage("Company name required")
        .run(req);

      await body("resume")
        .custom((value, { req }) => {
          if (!req.file) {
            throw new Error("Resume required");
          }
          if (req.file.mimetype !== "application/pdf") {
            throw new Error("Only PDF files are accepted");
          }
          return ".pdf";
        })
        .run(req);

      const validationResults = validationResult(req);
      if (validationResults.array().length > 0) {
        return res.render("error", {
          errorMessage: validationResults.array()[0].msg,
        });
      }

      return next();
    } catch (error) {
      console.log(error);
    }
  };
}

export default JobsValidations;
