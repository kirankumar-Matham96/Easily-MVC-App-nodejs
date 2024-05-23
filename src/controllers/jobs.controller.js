import JobsModel from "../models/jobs.model.js";

class JobController {
  getHome(req, res) {
    res.render("home");
  }
  getJobs(req, res) {
    const jobs = JobsModel.getJobs();
    res.render("jobs", { jobs });
  }
  getNewJob(req, res) {
    res.render("post-new-job");
  }
}

export default JobController;
