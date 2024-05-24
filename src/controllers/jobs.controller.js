import JobsModel from "../models/jobs.model.js";

class JobController {
  getHome(req, res) {
    res.render("home", { errorMessage: null });
  }
  getJobs(req, res) {
    const jobs = JobsModel.getJobs();
    res.render("jobs", { jobs });
  }
  getNewJob(req, res) {
    res.render("post-new-job", { errorMessage: null });
  }
  getJobDetails(req, res) {
    const { id } = req.params;
    const jobFound = JobsModel.getJobById(id);
    res.render("job-details", { job: jobFound, errorMessage: null });
  }

  postNewJob(req, res) {
    // adjusting for the single skill
    if (typeof req.body.skills === "string") {
      req.body.skills = [req.body.skills];
    }

    JobsModel.createJob(req.body);
    res.redirect("/jobs");
  }

  postAddApplicant(req,res){
    JobsModel.addApplicant(req.body);
    res.redirect("/jobs");
  }
}

export default JobController;
