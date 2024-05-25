export const auth = (req, res, next) => {
  return req.session.userEmail ? next() : res.redirect("/login");
};
