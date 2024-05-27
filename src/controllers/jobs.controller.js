/*********************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : Controls the operations(requests and responses)
 *
 * @description
 *
 * @file        : controllers/jobs.controller.js
 * @overview    : controller module to control the requests
 * @module      : this is necessary to run the job search app
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 *********************************************************************/

// imports
import JobsModel from "../models/jobs.model.js";

class JobController {
  /**
   * To get the home page (base page).
   */
  getHome = (req, res) => {
    res.render("home", {
      errorMessage: null,
      userEmail: req.session.userEmail,
    });
  };

  /**
   * To get the jobs list page.
   */
  getJobs = (req, res) => {
    const jobs = JobsModel.getJobs();
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const totalPages = Math.ceil(jobs.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedJobs = jobs.slice(startIndex, endIndex);
    res.render("jobs", {
      jobs: paginatedJobs,
      currentPage: page,
      totalPages: totalPages,
      userEmail: req.session.userEmail,
    });
  };

  /**
   * To get the form to create a new job (for recruiters).
   */
  getNewJob = (req, res) => {
    res.render("post-new-job", {
      errorMessage: null,
      userEmail: req.session.userEmail,
    });
  };

  /**
   * To get the details of a specific job.
   */
  getJobDetails = (req, res) => {
    const { id } = req.params;
    const jobFound = JobsModel.getJobById(id);
    res.render("job-details", {
      job: jobFound,
      userEmail: req.session.userEmail,
      errorMessage: null,
    });
  };

  /**
   * To get the job updating form (for recruiters). 
   */
  getUpdateJob = (req, res) => {
    const { id } = req.params;
    req.body.recruiterEmail = req.session.userEmail;
    const jobFound = JobsModel.getJobById(req.body, id);
    if (jobFound) {
      return res.render("update-job", {
        job: jobFound,
        errorMessage: null,
        userEmail: req.session.userEmail,
      });
    }
    return res.render("error", {
      errorMessage: "You don't have the access to update this post",
    });
  };

  /**
   * To update a specific job.
   * @returns jobs list page
   */
  putUpdateJob = (req, res) => {
    // adjusting for the single skill
    if (typeof req.body.skills === "string") {
      req.body.skills = [req.body.skills];
    }
    req.body.recruiterEmail = req.session.userEmail;
    const { id } = req.params;
    const isUpdated = JobsModel.updateJob(req.body, id);
    if (isUpdated) {
      return res.status(200).redirect("/jobs");
    }
    return res.render("error", {
      errorMessage: "You don't have the access to update this post",
    });
  };

  /**
   * To delete a specific job (for recruiters).
   * @returns success or failure message
   */
  postDeleteJob = (req, res) => {
    const { id } = req.params;
    const isDeleted = JobsModel.deleteJob(id, req.session.userEmail);
    if (isDeleted) {
      return res.status(200).send({ message: "Post deleted successfully!" });
    }
    return res
      .status(403)
      .send({ message: "You don't have the access to delete this post" });
  };

  /**
   * To create a new job (for recruiters).
   */
  postNewJob = (req, res) => {
    // adjusting for the single skill
    if (typeof req.body.skills === "string") {
      req.body.skills = [req.body.skills];
    }
    console.log("Locals => ", req.locals);
    console.log("Locals => ", req.session.userEmail);
    req.body.recruiterEmail = req.session.userEmail;
    JobsModel.createJob(req.body);
    res.redirect("/jobs");
  };

  /**
   * To get the applicants list page. 
   */
  getApplicants = (req, res) => {
    const { id } = req.params;
    const applicants = JobsModel.getApplicantsOfAJob(id);
    // res.render("applicants", {
    //   applicants,
    //   userEmail: req.session.userEmail,
    // });

    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const totalPages = Math.ceil(applicants.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedApplicants = applicants.slice(startIndex, endIndex);
    res.render("applicants", {
      jobId: id,
      applicants: paginatedApplicants,
      currentPage: page,
      totalPages: totalPages,
      userEmail: req.session.userEmail,
    });
  };

  /**
   * To apply for a job (for job seekers).
   * Adds the applicant to a specific job.
   */
  postAddApplicant = (req, res) => {
    // this is the job id
    const { id } = req.params;

    // getting resume file path
    const resume = req.file.filename;

    // adding resume file path to the request object
    req.body.resume = resume;

    JobsModel.addApplicant(req.body, id);
    res.redirect("/jobs");
  };

  /**
   * To get the job post by search (with company title only)
   */
  getSearch = (req, res) => {
    const query = req.query.query;
    const jobsFound = JobsModel.getJobsBySearch(query);
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 12;
    const totalPages = Math.ceil(jobsFound.length / limit);
    const startIndex = (page - 1) * limit;
    const endIndex = page * limit;
    const paginatedJobs = jobsFound.slice(startIndex, endIndex);
    res.render("jobs", {
      jobs: paginatedJobs,
      currentPage: page,
      totalPages: totalPages,
      userEmail: req.session.userEmail,
    });
  };
}

export default JobController;
