import { v4 as uuidv4 } from "uuid";
import ApplicantModel from "./applicant.model.js";

const jobs = [
  {
    id: uuidv4(),
    jobCategory: "Tech",
    jobDesignation: "Software Engineer",
    jobLocation: "Hyderabad",
    companyName: "Deloight",
    salary: "4.5 - 8",
    applyBy: new Date().toISOString(),
    skillsRequired: ["REACT", "ANGULAR", "NODE", "EXPRESS", "MONGODB", "MYSQL"],
    numberOfOpenings: 5,
    jobPosted: new Date().toISOString(),
    applicants: [],
  },
];

class JobsModel {
  constructor(
    jobCategory,
    jobDesignation,
    jobLocation,
    companyName,
    salary,
    numberOfOpenings,
    skillsRequired,
    applyBy,
    applicants = []
  ) {
    this.id = uuidv4();
    this.jobCategory = jobCategory;
    this.jobDesignation = jobDesignation;
    this.jobLocation = jobLocation;
    this.companyName = companyName;
    this.salary = salary;
    this.applyBy = applyBy;
    this.skillsRequired = skillsRequired;
    this.numberOfOpenings = numberOfOpenings;
    this.jobPosted = new Date().toISOString();
    this.applicants = applicants;
  }

  static getJobs() {
    console.log({ jobs });
    return jobs;
  }

  static getJobById(id) {
    console.log(id);
    const foundJob = jobs.find((job) => job.id === id);
    return foundJob;
  }

  static createJob(jobDetails) {
    const {
      category,
      destination,
      location,
      name,
      salary,
      positions,
      skills,
      lastDate,
    } = jobDetails;

    const newJob = new JobsModel(
      category,
      destination,
      location,
      name,
      salary,
      positions,
      skills,
      lastDate
    );

    jobs.push(newJob);
  }

  static updateJob(updatedJob, id) {
    const jobFound = jobs.find((job) => job.id === id);

    jobFound.jobCategory = updatedJob.category;
    jobFound.jobDesignation = updatedJob.destination;
    jobFound.jobLocation = updatedJob.location;
    jobFound.companyName = updatedJob.name;
    jobFound.salary = updatedJob.salary;
    jobFound.applyBy = updatedJob.lastDate;
    jobFound.skillsRequired = updatedJob.skills;
    jobFound.numberOfOpenings = updatedJob.positions;
  }

  static addApplicant(applicant, jobId) {
    const newApplicant = ApplicantModel.addApplicant(applicant);

    // find job
    const jobFound = jobs.find((job) => job.id === jobId);

    // add applicant id to the job
    jobFound.applicants.push(newApplicant.id);
  }

  static getApplicantsOfAJob(id) {
    const jobFound = jobs.find((job) => job.id === id);
    const applicantsList = jobFound.applicants.map((applicant) => {
      return ApplicantModel.getApplicantById(applicant.id);
    });
    return applicantsList;
  }
}

export default JobsModel;
