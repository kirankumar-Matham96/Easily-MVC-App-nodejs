import cookieParser from "cookie-parser";

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
