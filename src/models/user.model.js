/** ******************************************************************
 * Execution    : 1. Default node with npm   cmd> npm start
 *                2. If nodemon installed    cmd> npm run dev
 *
 * Purpose      : Have the structure for users model
 *
 * @description
 *
 * @file        : models/users.model.js
 * @overview    : Provides structure for users model and performs CRUD operations
 * @module      : this is necessary to perform users CRUD operations
 * @author      : Kirankumar Matham <mathamkirankumar96@gmail.com>
 * @version     : 1.0.0
 * @since       : 27-05-2024
 ******************************************************************** */

// imports
import { v4 as uuidv4 } from "uuid";

const registeredUsers = [];

class UserModel {
  constructor(name, email, password) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  /**
   * To get the users.
   * @returns users list.
   */
  static getUsers = () => {
    return registeredUsers;
  };

  /**
   * To register new user
   * @param {user details} user 
   */
  static registerUser = (user) => {
    const { name, email, password } = user;
    const newUser = new UserModel(name, email, password);
    registeredUsers.push(newUser);
  };

  /**
   * To login.
   * @param {user details} user 
   * @returns user object.
   */
  static login = (user) => {
    const { email, password } = user;
    const userFound = registeredUsers.find((user) => user.email === email);
    return userFound;
  };
}

export default UserModel;
