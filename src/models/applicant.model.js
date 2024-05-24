const applicants = [];

class ApplicantModel {
  constructor(name, email, contact, resume) {
    this.name = name;
    this.email = email;
    this.contact = contact;
    this.resume = resume;
  }

  static getApplicants() {
    return applicants;
  }

  static addApplicant(name, email, contact, resume) {
    const newApplicant = new ApplicantModel(name, email, contact, resume);
    applicants.push(newApplicant);
  }

  static getApplicantById(id) {
    const foundApplicant = applicants.find((applicant) => applicant.id === id);
    return foundApplicant;
  }

  static updateApplicant(applicant) {
    const { id, name, email, contact, resume } = applicant;

    const applicantFound = applicants.find((applicant) => applicant.id === id);
    applicantFound.name = name;
    applicantFound.email = email;
    applicantFound.contact = contact;
    applicantFound.resume = resume;
  }

  static removeApplicant(id){
    
  }
}

export default ApplicantModel;
