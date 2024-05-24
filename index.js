import express from "express";
import ejsLayouts from "express-ejs-layouts";
import path from "path";

import JobController from "./src/controllers/jobs.controller.js";
import UserController from "./src/controllers/user.controller.js";

// middlewares
import { uploadFile } from "./src/middlewares/multer.middleware.js";

const jobController = new JobController();
const userController = new UserController();

const PORT = 3200;

// constructing the path
const folderPath = path.resolve("public");

// using express
const app = express();

// using json parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// setting up ejs layouts
app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(ejsLayouts);

// applying static path
app.use(express.static(folderPath));

// setting up multer middleware

/* basic routes */
app.get("/", jobController.getHome);

/* job related routes */
app.get("/jobs", jobController.getJobs);
app.get("/postjob", jobController.getNewJob);
app.post("/postjob", jobController.postNewJob);
// job details route
app.get("/jobs/:id", jobController.getJobDetails);
// apply for a job
app.post(
  "/jobs/:id/applicants/",
  uploadFile.single("resume"),
  jobController.postAddApplicant
);
// update job
app.get("/job/update/:id", jobController.getUpdateJob);
app.post("/job/update/:id", jobController.putUpdateJob);

// delete job
app.get("/job/delete/:id", jobController.getDeleteJob);

/* login & registration routes */
app.post("/register", userController.postRegister);
app.get("/login", userController.getLogin);
app.post("/login", userController.postLogin);
app.get("/logout");

/* 404 error route */
app.get("/404", userController.get404);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
