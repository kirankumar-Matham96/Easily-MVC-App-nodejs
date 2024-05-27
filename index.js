/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : To configure express server and routes
 *
 * @description
 *
 * @file        : index.js
 * @overview    : Provides configuration for the express and other dependencies and routes
 * @module      : this is necessary to use HTTP methods
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

/* dependencies */
import express from "express";
import session from "express-session";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import cookieParser from "cookie-parser";

/* controllers */
import JobController from "./src/controllers/jobs.controller.js";
import UserController from "./src/controllers/user.controller.js";

// middlewares
import { auth } from "./src/middlewares/auth.middleware.js";
import { uploadFile } from "./src/middlewares/multer.middleware.js";
import { lastVisit } from "./src/middlewares/lastVisit.middleware.js";
import { sendConfirmationMail } from "./src/middlewares/mailer.middleware.js";
import UserValidations from "./src/middlewares/userValidation.middleware.js";
import JobsValidations from "./src/middlewares/jobValidation.middleware.js";

const jobController = new JobController();
const userController = new UserController();

const PORT = 3200;

// constructing the path
const folderPath = path.resolve("public");

// using express
const app = express();

// applying static path
app.use(express.static(folderPath));

// setting up cookie parser to set the sessions and cookies
app.use(cookieParser());

// using lastVisit middleware at application level
app.use(lastVisit);

// setting up sessions
const sessionConfig = {
  secret:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false },
};
app.set("trust proxy", 1);
app.use(session(sessionConfig));

// using json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up ejs layouts
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(ejsLayouts);

// setting up multer middleware

/* basic routes */
app.get("/", jobController.getHome);

/* job related routes */
app.get("/jobs", jobController.getJobs);
app.get("/jobs/:id", jobController.getJobDetails); // job details route
app.get("/search", jobController.getSearch);

/* job management routes */
app.get("/postjob", auth, jobController.getNewJob);
app.post("/postjob", auth, jobController.postNewJob);
app.get("/jobs/update/:id", auth, jobController.getUpdateJob);
app.post("/jobs/update/:id", auth, jobController.putUpdateJob);
app.delete("/jobs/delete/:id", auth, jobController.postDeleteJob);

/* applicant routes */
app.post(
  "/jobs/:id/applicants/",
  uploadFile.single("resume"),
  JobsValidations.applyJobValidator,
  sendConfirmationMail,
  jobController.postAddApplicant
);
app.get("/jobs/applicants/:id", auth, jobController.getApplicants);

/* login & registration routes */
app.get("/login", userController.getLogin);
app.post("/login", UserValidations.validateLogin, userController.postLogin);
app.post(
  "/register",
  UserValidations.validateRegister,
  userController.postRegister
);
app.get("/logout", userController.getLogout);

/* error routes */
app.get("/error-deletion", userController.getError);
app.get("*", userController.getUnknown);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
