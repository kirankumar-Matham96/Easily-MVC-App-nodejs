/*********************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : Controls the user register & login operations(requests and responses)
 *
 * @description
 *
 * @file        : controllers/user.controller.js
 * @overview    : controller module to control the user requests
 * @module      : this is necessary to run the register and login APIs
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 *********************************************************************/

// imports
import UserModel from "../models/user.model.js";

class UserController {
  /**
   * To register a user (for recruiters).
   */
  postRegister = (req, res) => {
    UserModel.registerUser(req.body);
    res.redirect("/login");
  };

  /**
   * To login (for recruiters). 
   * @returns jobs list page.
   */
  postLogin = (req, res) => {
    const userFound = UserModel.login(req.body);
    if (userFound) {
      if (userFound.password === req.body.password) {
        req.session.userEmail = userFound.email;
        return res.redirect("/jobs");
      } else {
        return res.render("login", { errorMessage: "Invalid credentials!" });
      }
    }
    res.render("error", { errorMessage: "User not found pls register" });
  };

  /**
   * To logout.
   */
  getLogout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });

    res.clearCookie("lastVisit");
  };

  /**
   * To get login form.
   */
  getLogin = (req, res) => {
    res.render("login", { errorMessage: null });
  };

  /**
   * To get the 404 error page for unreachable routes. 
   */
  getUnknown = (req, res) => {
    res.render("error", {
      errorMessage: "404 Page not found!",
    });
  };

  /**
   * To get the error page with error message passed
   */
  getError = (req, res) => {
    res.render("error", {
      errorMessage: "You don't have the access to delete this post",
    });
  };
}

export default UserController;
