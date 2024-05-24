import UserModel from "../models/user.model.js";
class UserController {
  postRegister(req, res) {
    UserModel.registerUser(req.body);
    res.redirect("/login");
  }

  postLogin(req, res) {
    const userFound = UserModel.login(req.body);
    if (userFound) {
      if (userFound.password === req.body.password) {
        return res.redirect("/jobs");
      } else {
        return res.render("login", { errorMessage: "Invalid credentials!" });
      }
    }
    res.render("error", { errorMessage: "User not found pls register" });
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
}

export default UserController;
