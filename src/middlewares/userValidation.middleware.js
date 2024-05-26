import { body, validationResult } from "express-validator";

class UserValidations {
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
