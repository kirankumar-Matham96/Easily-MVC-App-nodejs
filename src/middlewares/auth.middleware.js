/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : To authenticate and authorize user
 *
 * @description
 *
 * @file        : middlewares/auth.middleware.js
 * @overview    : helps to check availability of user email
 * @module      : this is necessary to access the data.
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

/**
 * To get the authentication.
 * @returns login page if not logged in.
 */
export const auth = (req, res, next) => {
  return req.session.userEmail ? next() : res.redirect("/login");
};
