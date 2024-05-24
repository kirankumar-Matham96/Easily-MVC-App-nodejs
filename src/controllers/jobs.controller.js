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
    const {
      category,
      destination,
      location,
      name,
      salary,
      positions,
      skills,
      lastDate,
    } = req.body;

    console.log(
      "\n\nIn Controller => ",
      JSON.stringify({
        category,
        destination,
        location,
        name,
        salary,
        positions,
        skills,
        lastDate,
      })
    );
    JobsModel.createJob(req.body);
    res.redirect("/jobs");
  }
}

export default JobController;
