class UserController {
  getLogin(req, res) {
    res.render("login");
  }
  get404(req, res) {
    res.render("error");
  }
}

export default UserController;
