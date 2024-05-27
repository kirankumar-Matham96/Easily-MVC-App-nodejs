/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : Have the structure for applicant model
 *
 * @description
 *
 * @file        : models/applicant.model.js
 * @overview    : Provides structure for applicant model and performs CRUD operations
 * @module      : this is necessary to perform applicant CRUD operations
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

// imports
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

  /**
   * To get all the applicants.
   * @returns list of applicants.
   */
  static getApplicants = () => {
    return applicants;
  };

  /**
   * To add new applicant.
   * @param {applicant details object} applicant 
   * @returns newly created applicant object.
   */
  static addApplicant = (applicant) => {
    const { name, email, contact, resume } = applicant;
    const newApplicant = new ApplicantModel(name, email, contact, resume);
    applicants.push(newApplicant);
    return newApplicant;
  };

  /**
   * To get the applicant by id
   * @param {applicant id} id 
   * @returns applicant object
   */
  static getApplicantById = (id) => {
    const foundApplicant = applicants.find((applicant) => {
      return applicant.id === id;
    });
    return foundApplicant;
  };

  /**
   * To update the applicant.
   * @param {modified applicant object} applicant 
   */
  static updateApplicant = (applicant) => {
    const { id, name, email, contact, resume } = applicant;

    const applicantFound = applicants.find((applicant) => applicant.id === id);
    applicantFound.name = name;
    applicantFound.email = email;
    applicantFound.contact = contact;
    applicantFound.resume = resume;
  };

  /**
   * To remove the applicant from the list.
   * @param {applicant id} id 
   */
  static removeApplicant = (id) => {
    const applicantIndex = applicants.findIndex(
      (applicant) => applicant.id === id
    );
    applicants.splice(applicantIndex, 1);
  };
}

export default ApplicantModel;
