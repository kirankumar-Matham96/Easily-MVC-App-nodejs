/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : Tracking user last visit
 *
 * @description
 *
 * @file        : middlewares/lastVisit.middleware.js
 * @overview    : Tracks user visit and adds cookie
 * @module      : this is necessary to track the user visits
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */


/**
 * To format date & time.
 * @param {date string} inputDate 
 * @returns formatted date & time string.
 */
const formatDate = (inputDate = "") => {
  let date;
  if (inputDate) {
    date = new Date(inputDate);
  } else {
    date = new Date();
  }

  const month = date.toLocaleString("default", { month: "long" });
  const formattedDateTimeString =
    month +
    " " +
    date.getDate() +
    ", " +
    date.getFullYear() +
    " at " +
    date.toLocaleTimeString();
  return formattedDateTimeString;
};

/**
 * To track last visited time & date of a user. 
 */
export const lastVisit = (req, res, next) => {
  if (req.cookies.lastVisit) {
    const date = new Date(req.cookies.lastVisit).toISOString();
    res.locals.lastVisit = date;
    res.locals.lastVisitFormatted = formatDate(date);
  } else {
    const date = new Date().toISOString();
    res.cookie("lastVisit", date, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
    res.cookie("lastVisitFormatted", formatDate(date), {
      maxAge: 1 * 24 * 60 * 60 * 1000,
    });
  }
  next();
};
