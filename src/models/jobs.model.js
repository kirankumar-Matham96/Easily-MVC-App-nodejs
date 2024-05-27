/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : Have the structure for jobs model
 *
 * @description
 *
 * @file        : models/jobs.model.js
 * @overview    : Provides structure for jobs model and performs CRUD operations
 * @module      : this is necessary to perform jobs CRUD operations
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

// imports
import { v4 as uuidv4 } from "uuid";
import ApplicantModel from "./applicant.model.js";

// List to store the jobs
export const jobs = [
  {
    id: "371dca82-574c-4f84-866b-9b4681c52196",
    jobDesignation: "Radiologic Technician",
    companyName: "Wyman, Marvin and Medhurst",
    jobLocation: "Valenzuela, Svalbard & Jan Mayen Islands",
    salary: "7.4 - 12.5",
    applyBy: "Fri, 01/04/2002",
    jobCategory: "Non Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["MAVEN", "GO"],
    applicants: [],
  },
  {
    id: "309ba9b7-1c87-4bb7-a40c-156e2e60c066",
    jobDesignation: "Aircraft Mechanics OR Aircraft Service Technician",
    companyName: "Prohaska Inc",
    jobLocation: "Tayabas, Guam",
    salary: "6.9 - 9.6",
    applyBy: "Wed, 11/30/1988",
    jobCategory: "Tech",
    numberOfOpenings: 5,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVA", "NODE"],
    applicants: [],
  },
  {
    id: "0e29e19e-fbec-4c11-97de-802dc561974f",
    jobDesignation: "Computer Hardware Engineer",
    companyName: "Lang-Swaniawski",
    jobLocation: "Tandag, Uzbekistan",
    salary: "6.5 - 11.7",
    applyBy: "Sat, 12/07/1985",
    jobCategory: "Non Tech",
    numberOfOpenings: 7,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["GO", "PYTHON", "JAVASCRIPT"],
    applicants: [],
  },
  {
    id: "953ada2d-0f18-447c-a48b-bdaacadc0729",
    jobDesignation: "Keyboard Instrument Repairer and Tuner",
    companyName: "Kilback, Corkery and Ryan",
    jobLocation: "Isabela, United States of America",
    salary: "7.7 - 13.5",
    applyBy: "Tue, 02/12/1985",
    jobCategory: "Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["EXPRESS", "JAVASCRIPT", "JAVA", "Soft Skills"],
    applicants: [],
  },
  {
    id: "d549887e-df80-4b90-90a0-657c79360ec4",
    jobDesignation: "Electromechanical Equipment Assembler",
    companyName: "Jerde-Nolan",
    jobLocation: "Guihulngan, Zambia",
    salary: "7.7 - 12.5",
    applyBy: "Sun, 04/18/2010",
    jobCategory: "Tech",
    numberOfOpenings: 3,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVA", "NODE", "EXPRESS", "PYTHON"],
    applicants: [],
  },
  {
    id: "8eae1ffc-c59e-4085-90c6-ce2adc6a3932",
    jobDesignation: "Compensation and Benefits Manager",
    companyName: "Waters-Williamson",
    jobLocation: "Navotas, Morocco",
    salary: "7.3 - 13.0",
    applyBy: "Mon, 05/16/2011",
    jobCategory: "Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["RUBY", "Data Structures & Algo"],
    applicants: [],
  },
  {
    id: "f32e91c0-fe69-469d-9b0a-5ffc15da0635",
    jobDesignation: "Photographic Processing Machine Operator",
    companyName: "Johns LLC",
    jobLocation: "El Salvador, Algeria",
    salary: "7.7 - 13.5",
    applyBy: "Mon, 02/07/2022",
    jobCategory: "Tech",
    numberOfOpenings: 8,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["EXPRESS", "MONGODB"],
    applicants: [],
  },
  {
    id: "d1f4651a-aff6-45cd-ab88-ddd3fd660282",
    jobDesignation: "Fishing OR Forestry Supervisor",
    companyName: "Kunde-Herman",
    jobLocation: "Butuan, Iran",
    salary: "7.9 - 13.7",
    applyBy: "Tue, 02/28/1978",
    jobCategory: "Non Tech",
    numberOfOpenings: 9,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["ANGULAR", "PYTHON"],
    applicants: [],
  },
  {
    id: "06a6b216-34ae-44ab-9970-7ba24ca16665",
    jobDesignation: "Operations Research Analyst",
    companyName: "Stokes, Okuneva and Collier",
    jobLocation: "Cavite City, New Zealand",
    salary: "8.3 - 11.0",
    applyBy: "Wed, 08/18/1993",
    jobCategory: "Non Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["DEVOPS", "Kotlin"],
    applicants: [],
  },
  {
    id: "9e80ccf3-763d-485f-9908-66a06d0bc556",
    jobDesignation: "Electrical and Electronic Inspector and Tester",
    companyName: "Jakubowski-Schimmel",
    jobLocation: "Tandag, Slovakia (Slovak Republic)",
    salary: "8.6 - 13.9",
    applyBy: "Tue, 06/24/1980",
    jobCategory: "Tech",
    numberOfOpenings: 10,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVA"],
    applicants: [],
  },
  {
    id: "20cda508-b529-407e-a73e-f814fb569970",
    jobDesignation: "Insurance Appraiser",
    companyName: "Leannon Group",
    jobLocation: "Dumaguete, Barbados",
    salary: "8.1 - 10.0",
    applyBy: "Sun, 02/08/2009",
    jobCategory: "Non Tech",
    numberOfOpenings: 9,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["Soft Skills"],
    applicants: [],
  },
  {
    id: "7037f3ce-81bd-4d5e-bf6e-a1e2ff77dd95",
    jobDesignation: "Archivist",
    companyName: "Tremblay and Sons",
    jobLocation: "Toledo, Eritrea",
    salary: "9.4 - 11.5",
    applyBy: "Sun, 05/09/2010",
    jobCategory: "Tech",
    numberOfOpenings: 3,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["DEVOPS", "PYTHON", "GO", "RUBY", "Kotlin"],
    applicants: [],
  },
  {
    id: "7a36e7dc-2406-449e-9adc-306daadffac8",
    jobDesignation: "Machine Tool Operator",
    companyName: "Gutkowski, Monahan and Schaefer",
    jobLocation: "Digos, Singapore",
    salary: "8.4 - 9.7",
    applyBy: "Mon, 06/02/2008",
    jobCategory: "Non Tech",
    numberOfOpenings: 6,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["Soft Skills", "GO", "DEVOPS"],
    applicants: [],
  },
  {
    id: "0f938e9e-5167-4295-ad40-2c8452113404",
    jobDesignation: "Heating Equipment Operator",
    companyName: "Schiller and Sons",
    jobLocation: "Tacurong, Saint Barthelemy",
    salary: "9.2 - 10.6",
    applyBy: "Sun, 08/11/1974",
    jobCategory: "Tech",
    numberOfOpenings: 6,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["RUBY", "DEVOPS"],
    applicants: [],
  },
  {
    id: "1d2b6b9f-7b22-42b9-a365-1fd00db9490a",
    jobDesignation: "Physician Assistant",
    companyName: "McLaughlin-Stoltenberg",
    jobLocation: "Bislig, United States of America",
    salary: "7.0 - 12.5",
    applyBy: "Wed, 03/07/2018",
    jobCategory: "Tech",
    numberOfOpenings: 5,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["SQL", "GO", "EXPRESS", "PYTHON"],
    applicants: [],
  },
  {
    id: "92ecd810-9a71-495c-bda7-fe94a4acbc18",
    jobDesignation: "Multiple Machine Tool Setter",
    companyName: "Vandervort-VonRueden",
    jobLocation: "Malolos, Namibia",
    salary: "6.8 - 11.8",
    applyBy: "Fri, 01/06/1989",
    jobCategory: "Non Tech",
    numberOfOpenings: 2,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVA", "NODE"],
    applicants: [],
  },
  {
    id: "4b033bbb-e9ad-4451-9e69-3775d428a54c",
    jobDesignation: "Earth Driller",
    companyName: "Turcotte, Weber and Funk",
    jobLocation: "San Pedro, Korea",
    salary: "7.8 - 11.5",
    applyBy: "Tue, 04/02/1991",
    jobCategory: "Tech",
    numberOfOpenings: 4,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: [
      "PYTHON",
      "Data Structures & Algo",
      "GO",
      "MAVEN",
      "MONGODB",
    ],
    applicants: [],
  },
  {
    id: "87d8af58-d4e6-4c29-bd6f-b965cd0bf39d",
    jobDesignation: "Occupational Health Safety Technician",
    companyName: "Daugherty-Rodriguez",
    jobLocation: "Puerto Princesa, Suriname",
    salary: "6.1 - 11.1",
    applyBy: "Sat, 05/29/1971",
    jobCategory: "Tech",
    numberOfOpenings: 6,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["Gradle", "MONGODB", "EXPRESS"],
    applicants: [],
  },
  {
    id: "ed4dc811-3c18-4ded-a3e3-3aac115984a1",
    jobDesignation: "Supervisor of Police",
    companyName: "Mante Inc",
    jobLocation: "Bayugan, Moldova",
    salary: "9.0 - 10.0",
    applyBy: "Fri, 06/22/2012",
    jobCategory: "Non Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["MONGODB", "MAVEN", "NODE", "DEVOPS"],
    applicants: [],
  },
  {
    id: "bcf10d73-2646-4bed-aa78-8071deb5af81",
    jobDesignation: "Web Developer",
    companyName: "Yundt-Graham",
    jobLocation: "Batac, Iran",
    salary: "9.5 - 11.8",
    applyBy: "Sat, 02/15/1975",
    jobCategory: "Tech",
    numberOfOpenings: 9,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVASCRIPT", "RUBY"],
    applicants: [],
  },
  {
    id: "9d4593e2-4539-44fc-a286-825072415d79",
    jobDesignation: "Plating Machine Operator",
    companyName: "Kuhic-Kreiger",
    jobLocation: "Cebu City, Azerbaijan",
    salary: "6.7 - 12.5",
    applyBy: "Sun, 07/30/2017",
    jobCategory: "Non Tech",
    numberOfOpenings: 4,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVA"],
    applicants: [],
  },
  {
    id: "41774a14-5904-4524-8bad-023cb146be1f",
    jobDesignation: "Marine Engineer",
    companyName: "Ruecker-Hoeger",
    jobLocation: "Victorias, Cote d'Ivoire",
    salary: "8.3 - 10.7",
    applyBy: "Mon, 11/13/1972",
    jobCategory: "Non Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVASCRIPT", "Soft Skills", "DEVOPS"],
    applicants: [],
  },
  {
    id: "87ebfdd2-94f8-4834-8b07-7d67b20e04d1",
    jobDesignation: "Transportation Attendant",
    companyName: "Padberg-Waters",
    jobLocation: "Calamba, Serbia",
    salary: "6.3 - 10.7",
    applyBy: "Mon, 05/16/1988",
    jobCategory: "Non Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["JAVASCRIPT", "JAVA"],
    applicants: [],
  },
  {
    id: "58a12305-e769-43f4-9fe4-cb4510263ab1",
    jobDesignation: "Communication Equipment Worker",
    companyName: "Fritsch, Reilly and Hickle",
    jobLocation: "Bais, Uganda",
    salary: "9.4 - 11.7",
    applyBy: "Sun, 07/22/1984",
    jobCategory: "Tech",
    numberOfOpenings: 3,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["PYTHON", "RUBY"],
    applicants: [],
  },
  {
    id: "760b6384-7a27-4e5b-af1d-51a47ebfaca6",
    jobDesignation: "Refractory Materials Repairer",
    companyName: "Nitzsche-Koch",
    jobLocation: "Roxas, Antigua and Barbuda",
    salary: "7.9 - 12.2",
    applyBy: "Thu, 02/22/2001",
    jobCategory: "Non Tech",
    numberOfOpenings: 4,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["Gradle"],
    applicants: [],
  },
  {
    id: "231996d3-65ec-4b75-98d4-66b8fe5ae8f2",
    jobDesignation: "Recreational Therapist",
    companyName: "Schroeder LLC",
    jobLocation: "Puerto Princesa, Bhutan",
    salary: "8.4 - 13.2",
    applyBy: "Sun, 03/19/1995",
    jobCategory: "Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["NODE"],
    applicants: [],
  },
  {
    id: "8ec63139-40ff-43f3-9684-9ffee4c4791a",
    jobDesignation: "Brokerage Clerk",
    companyName: "Hettinger, Erdman and Harber",
    jobLocation: "Candon, Jordan",
    salary: "6.8 - 13.1",
    applyBy: "Wed, 08/27/1980",
    jobCategory: "Tech",
    numberOfOpenings: 10,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["ANGULAR", "NODE"],
    applicants: [],
  },
  {
    id: "1dd060a2-e6ce-446f-87a7-9d33450973de",
    jobDesignation: "Textile Dyeing Machine Operator",
    companyName: "Jacobson LLC",
    jobLocation: "Pagadian, El Salvador",
    salary: "9.3 - 11.8",
    applyBy: "Sat, 07/27/1974",
    jobCategory: "Non Tech",
    numberOfOpenings: 9,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["STATISTICS", "SQL"],
    applicants: [],
  },
  {
    id: "19cf9aff-d111-4450-beb2-59c4a9626343",
    jobDesignation: "Fence Erector",
    companyName: "Olson Ltd",
    jobLocation: "Makati, Anguilla",
    salary: "9.1 - 11.5",
    applyBy: "Tue, 02/25/1975",
    jobCategory: "Tech",
    numberOfOpenings: 6,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["Soft Skills", "STATISTICS", "GO", "EXPRESS"],
    applicants: [],
  },
  {
    id: "0de9ce58-65f8-4e4e-908f-f2021cae4ed6",
    jobDesignation: "Occupational Therapist Assistant",
    companyName: "Marvin PLC",
    jobLocation: "Naga, Nigeria",
    salary: "6.2 - 12.1",
    applyBy: "Mon, 03/20/2000",
    jobCategory: "Tech",
    numberOfOpenings: 9,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["Gradle", "Soft Skills", "SQL"],
    applicants: [],
  },
  {
    id: "9d4022f9-6c10-456a-abce-830361998627",
    jobDesignation: "Dental Assistant",
    companyName: "Swift-Balistreri",
    jobLocation: "Malaybalay, Kuwait",
    salary: "6.9 - 14.1",
    applyBy: "Sun, 04/09/1972",
    jobCategory: "Non Tech",
    numberOfOpenings: 5,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["PYTHON", "Gradle", "MONGODB"],
    applicants: [],
  },
  {
    id: "55a940f9-3035-4a4c-ac69-7003c9d7cded",
    jobDesignation: "Drilling and Boring Machine Tool Setter",
    companyName: "Ritchie-Cremin",
    jobLocation: "Silay, Tajikistan",
    salary: "8.4 - 12.6",
    applyBy: "Tue, 11/29/1994",
    jobCategory: "Non Tech",
    numberOfOpenings: 1,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["PYTHON", "SQL", "EXPRESS"],
    applicants: [],
  },
  {
    id: "cb5f2400-151e-4fa7-b83f-7773b718b724",
    jobDesignation: "Production Planner",
    companyName: "Lynch, Lehner and Ankunding",
    jobLocation: "Panabo, Myanmar",
    salary: "7.2 - 12.9",
    applyBy: "Tue, 07/26/2022",
    jobCategory: "Tech",
    numberOfOpenings: 2,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["DEVOPS"],
    applicants: [],
  },
  {
    id: "895a9de0-1a95-463d-a7f3-83682521301e",
    jobDesignation: "Precious Stone Worker",
    companyName: "Funk PLC",
    jobLocation: "Trece Martires, Grenada",
    salary: "6.4 - 13.2",
    applyBy: "Tue, 02/29/2000",
    jobCategory: "Non Tech",
    numberOfOpenings: 3,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["PYTHON"],
    applicants: [],
  },
  {
    id: "80a6b2a6-a6ee-4626-b967-1c700fed1a07",
    jobDesignation: "Loading Machine Operator",
    companyName: "O'Connell Group",
    jobLocation: "San Pedro, Pitcairn Islands",
    salary: "7.5 - 10.1",
    applyBy: "Sun, 07/07/2002",
    jobCategory: "Tech",
    numberOfOpenings: 10,
    jobPosted: "Sun, 10/15/2023",
    skillsRequired: ["STATISTICS", "JAVA", "RUBY", "PYTHON", "Soft Skills"],
    applicants: [],
  },
];

class JobsModel {
  constructor(
    recruiterEmail,
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
    this.recruiterEmail = recruiterEmail;
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

  /**
   * To get all the jobs.
   * @returns list of jobs.
   */
  static getJobs = () => {
    return jobs;
  };

  /**
   * To get the job by id.
   * @param {job id} id 
   * @returns job object.
   */
  static getJobById = (id) => {
    const foundJob = jobs.find((job) => job.id === id);
    return foundJob;
  };

  /**
   * To get the jobs by searched job title.
   * @param {search query} query 
   * @returns job object.
   */
  static getJobsBySearch = (query) => {
    const jobsFound = jobs.filter((job) => {
      if (job.companyName.toLowerCase().includes(query.toLowerCase())) {
        return job;
      }
    });
    return jobsFound;
  };

  /**
   * To create a new job.
   * @param {new job object} jobDetails 
   */
  static createJob = (jobDetails) => {
    const {
      recruiterEmail,
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
      recruiterEmail,
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
  };

  /**
   * To update the job.
   * @param {job object from the client} updatedJob 
   * @param {job id} id 
   * @returns 
   */
  static updateJob = (updatedJob, id) => {
    try {
      const jobFound = jobs.find((job) => job.id === id);

      if (jobFound.recruiterEmail === updatedJob.recruiterEmail) {
        jobFound.jobCategory = updatedJob.category;
        jobFound.jobDesignation = updatedJob.destination;
        jobFound.jobLocation = updatedJob.location;
        jobFound.companyName = updatedJob.name;
        jobFound.salary = updatedJob.salary;
        jobFound.applyBy = updatedJob.lastDate;
        jobFound.skillsRequired = updatedJob.skills;
        jobFound.numberOfOpenings = updatedJob.positions;
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * To delete the job.
   * @param {job id} id 
   * @param {logged in user email} recruiterEmail 
   * @returns boolean.
   */
  static deleteJob = (id, recruiterEmail) => {
    const jobIndex = jobs.findIndex((job) => job.id === id);
    if (recruiterEmail === jobs[jobIndex].recruiterEmail) {
      jobs.splice(jobIndex, 1);
      return true;
    }
    return false;
  };

  /**
   * To add new applicant to the job.
   * @param {applicant object} applicant 
   * @param {job id} jobId 
   */
  static addApplicant = (applicant, jobId) => {
    const newApplicant = ApplicantModel.addApplicant(applicant);

    // find job
    const jobFound = jobs.find((job) => job.id === jobId);

    // add applicant id to the job
    jobFound.applicants.push(newApplicant.id);
  };

  /**
   * To get the applicants of a specific job.
   * @param {job id} id 
   * @returns applicants list.
   */
  static getApplicantsOfAJob = (id) => {
    const jobFound = jobs.find((job) => job.id === id);
    const applicantsList = jobFound.applicants.map((applicantId) => {
      return ApplicantModel.getApplicantById(applicantId);
    });
    return applicantsList;
  };
}

export default JobsModel;
