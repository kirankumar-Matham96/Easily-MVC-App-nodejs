import { v4 as uuidv4 } from "uuid";

const applicants = [];

class ApplicantModel {
  constructor(name, email, contact, resume) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.resumePath = resume;
  }

  static getApplicants = () => {
    return applicants;
  };

  static addApplicant = (applicant) => {
    const { name, email, contact, resume } = applicant;
    const newApplicant = new ApplicantModel(name, email, contact, resume);
    applicants.push(newApplicant);
    return newApplicant;
  };

  static getApplicantById = (id) => {
    const foundApplicant = applicants.find((applicant) => {
      return applicant.id === id;
    });
    return foundApplicant;
  };

  static updateApplicant = (applicant) => {
    const { id, name, email, contact, resume } = applicant;

    const applicantFound = applicants.find((applicant) => applicant.id === id);
    applicantFound.name = name;
    applicantFound.email = email;
    applicantFound.contact = contact;
    applicantFound.resume = resume;
  };

  static removeApplicant = (id) => {
    const applicantIndex = applicants.findIndex(
      (applicant) => applicant.id === id
    );
    applicants.splice(applicantIndex, 1);
  };
}

export default ApplicantModel;
