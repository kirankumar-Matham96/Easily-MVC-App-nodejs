import JobsModel from "../models/jobs.model.js";
import path from "path";

class JobController {
  getHome(req, res) {
    res.render("home", {
      errorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  getJobs(req, res) {
    const jobs = JobsModel.getJobs();
    res.render("jobs", {
      jobs,
      userEmail: req.session.userEmail,
    });
  }

  getNewJob(req, res) {
    res.render("post-new-job", {
      errorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  getJobDetails(req, res) {
    const { id } = req.params;
    const jobFound = JobsModel.getJobById(id);
    res.render("job-details", {
      job: jobFound,
      userEmail: req.session.userEmail,
      errorMessage: null,
    });
  }

  getUpdateJob(req, res) {
    const { id } = req.params;
    const jobFound = JobsModel.getJobById(id);
    res.render("update-job", {
      job: jobFound,
      errorMessage: null,
      userEmail: req.session.userEmail,
    });
  }

  putUpdateJob(req, res) {
    // adjusting for the single skill
    if (typeof req.body.skills === "string") {
      req.body.skills = [req.body.skills];
    }
    const { id } = req.params;
    JobsModel.updateJob(req.body, id);
    return res.status(200).redirect("/jobs");
  }

  postDeleteJob(req, res) {
    const { id } = req.params;
    JobsModel.deleteJob(id);
    return res.status(200).send({ message: "Post deleted successfully!" });
  }

  postNewJob(req, res) {
    // adjusting for the single skill
    if (typeof req.body.skills === "string") {
      req.body.skills = [req.body.skills];
    }

    JobsModel.createJob(req.body);
    res.redirect("/jobs");
  }

  getApplicants(req, res) {
    const { id } = req.params;
    const applicants = JobsModel.getApplicantsOfAJob(id);
    res.render("applicants", {
      applicants,
      userEmail: req.session.userEmail,
    });
  }

  postAddApplicant(req, res) {
    // this is the job id
    const { id } = req.params;

    // getting resume file path
    const resume = req.file.filename;

    // adding resume file path to the request object
    req.body.resume = resume;

    JobsModel.addApplicant(req.body, id);
    res.redirect("/jobs");
  }
}

export default JobController;
