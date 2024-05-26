import express from "express";
import session from "express-session";
import ejsLayouts from "express-ejs-layouts";
import path from "path";
import cookieParser from "cookie-parser";

import JobController from "./src/controllers/jobs.controller.js";
import UserController from "./src/controllers/user.controller.js";

// middlewares
import { auth } from "./src/middlewares/auth.middleware.js";
import { uploadFile } from "./src/middlewares/multer.middleware.js";

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
// setting up sessions
const sessionConfig = {
  secret: "My Secret",
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
app.get("/postjob", auth, jobController.getNewJob);
app.post("/postjob", auth, jobController.postNewJob);
// job details route
app.get("/jobs/:id", jobController.getJobDetails);
// apply for a job
app.post(
  "/jobs/:id/applicants/",
  uploadFile.single("resume"),
  jobController.postAddApplicant
);
// update job
app.get("/job/update/:id", auth, jobController.getUpdateJob);
app.post("/job/update/:id", auth, jobController.putUpdateJob);

// delete job
app.get("/job/delete/:id", auth, jobController.getDeleteJob);

/* login & registration routes */
app.post("/register", userController.postRegister);
app.get("/login", userController.getLogin);
app.post("/login", userController.postLogin);
app.get("/logout", userController.getLogout);

/* 404 error route */
app.get("/404", userController.get404);

app.get("*", userController.getUnknown);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
