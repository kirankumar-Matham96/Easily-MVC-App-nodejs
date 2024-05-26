import UserModel from "../models/user.model.js";
import { jobs } from "../models/jobs.model.js";
class UserController {
  postRegister(req, res) {
    UserModel.registerUser(req.body);
    res.redirect("/login");
  }

  postLogin(req, res) {
    const userFound = UserModel.login(req.body);
    if (userFound) {
      if (userFound.password === req.body.password) {
        req.session.userEmail = userFound.email;
        return res.render("jobs", {
          jobs,
          userEmail: req.session.userEmail,
        });
      } else {
        return res.render("login", { errorMessage: "Invalid credentials!" });
      }
    }
    res.render("error", { errorMessage: "User not found pls register" });
  }

  getLogout(req, res) {
    req.session.destroy((err) => {
      if (err) {
        console.log(err);
      } else {
        res.redirect("/");
      }
    });
  }

  getLogin(req, res) {
    res.render("login", { errorMessage: null });
  }

  get404(req, res) {
    res.render("error", {
      errorMessage:
        "only recruiter is allowed to access this page, login as recruiter to continue",
    });
  }

  getUnknown(req, res) {
    res.render("error", {
      errorMessage: "404 Page not found!",
    });
  }
}

export default UserController;
