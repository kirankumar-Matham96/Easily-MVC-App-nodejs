import { v4 as uuidv4 } from "uuid";

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
    this.id = uuidv4();
    this.jobCategory = jobCategory;
    this.jobDesignation = jobDesignation;
    this.jobLocation = jobLocation;
    this.companyName = companyName;
    this.salary = salary;
    this.applyBy = applyBy;
    this.skillsRequired = [...skillsRequired];
    this.numberOfOpenings = numberOfOpenings;
    this.jobPosted = jobPosted;
    this.applicants = applicants;
  }

  static getJobs() {
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
    
    console.log({ skills });
    console.log(typeof skills);

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

  // static addApplicant(applicant){
  //   const newApplicant = 
  // }
}

export default JobsModel;
