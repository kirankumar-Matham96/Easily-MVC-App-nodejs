import JobsModel from "../models/jobs.model.js";

class JobController {
  getHome(req, res) {
    res.render("home");
  }
  getJobs(req, res) {
    const jobs = JobsModel.getJobs();
    res.render("jobs", { jobs });
  }
}

export default JobController;
