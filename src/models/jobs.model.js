import { v4 as uuidv4 } from "uuid";

const jobs = [
  {
    id: uuidv4(),
    jobCategory: "Tech",
    jobDesignation: "Software Engineer",
    jobLocation: "Hyderabad",
    companyName: "Deloight",
    salary: "4.5 to 8 LPA",
    applyBy: new Date().toISOString(),
    skillsRequired: ["REACT", "ANGULAR", "NODE", "EXPRESS", "MONGODB", "MYSQL"],
    numberOfOpenings: 5,
    jobPosted: new Date().toISOString(),
    applicants: [
      {
        applicantId: uuidv4(),
        name: "Sai Vinay Kolla",
        email: "skolla1998@gmail.com",
        contact: "125498638",
        resumePath: "/files/file.pdf",
      },
    ],
  },
];

class JobsModel {
  constructor(
    id,
    jobCategory,
    jobDesignation,
    jobLocation,
    companyName,
    salary,
    applyBy,
    skillsRequired,
    numberOfOpenings,
    jobPosted,
    applicants
  ) {
    this.id = id;
    this.jobCategory = jobCategory;
    this.jobDesignation = jobDesignation;
    this.jobLocation = jobLocation;
    this.companyName = companyName;
    this.salary = salary;
    this.applyBy = applyBy;
    this.skillsRequired = skillsRequired;
    this.numberOfOpenings = numberOfOpenings;
    this.jobPosted = jobPosted;
    this.applicants = applicants;
  }

  static postJob(job) {
    const {
      id,
      jobCategory,
      jobDesignation,
      jobLocation,
      companyName,
      salary,
      applyBy,
      skillsRequired,
      numberOfOpenings,
      jobPosted,
      applicants,
    } = job;

    const newJob = new JobsModel(
      id,
      jobCategory,
      jobDesignation,
      jobLocation,
      companyName,
      salary,
      applyBy,
      skillsRequired,
      numberOfOpenings,
      jobPosted,
      applicants
    );

    jobs.push(newJob);
  }

  static getJobs() {
    return jobs;
  }

  static getJobById(id) {
    const foundJob = jobs.find((job) => job.id === id);
    // return foundJob;
    return jobs[0];
  }
}

export default JobsModel;
