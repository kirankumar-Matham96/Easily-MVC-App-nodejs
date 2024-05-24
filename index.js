import express from "express";
import ejsLayouts from "express-ejs-layouts";
import path from "path";

import JobController from "./src/controllers/jobs.controller.js";
import UserController from "./src/controllers/user.controller.js";

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

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(ejsLayouts);

// applying static path
app.use(express.static(folderPath));

app.get("/", jobController.getHome);
app.get("/jobs", jobController.getJobs);
app.get("/postjob", jobController.getNewJob);
// app.get("/postjob", jobController.getNewJob);

/* job details route */
// app.get("/jobs/:id", jobController.getJobDetails);
app.get("/job", jobController.getJobDetails);

/* login & registration routes */
app.post("/register", userController.postRegister);
app.get("/login", userController.getLogin);
app.post("/login", userController.postLogin);

/* 404 error route */
app.get("/404", userController.get404);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
