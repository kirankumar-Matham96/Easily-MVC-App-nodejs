import UserModel from "../models/user.model.js";
import { jobs } from "../models/jobs.model.js";
class UserController {
  postRegister = (req, res) => {
    UserModel.registerUser(req.body);
    res.redirect("/login");
  }

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
  }

  getLogout = (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });

    res.clearCookie("lastVisit");
  }

  getLogin = (req, res) => {
    res.render("login", { errorMessage: null });
  }

  getUnknown = (req, res) => {
    res.render("error", {
      errorMessage: "404 Page not found!",
    });
  }

  getError = (req, res) => {
    res.render("error", {
      errorMessage: "You don't have the access to delete this post",
    });
  }
}

export default UserController;
