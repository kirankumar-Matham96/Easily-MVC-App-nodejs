import { v4 as uuidv4 } from "uuid";

const registeredUsers = [];

class UserModel {
  constructor(name, email, password) {
    this.id = uuidv4();
    this.name = name;
    this.email = email;
    this.password = password;
  }

  static getUsers = () => {
    return registeredUsers;
  };

  static registerUser = (user) => {
    const { name, email, password } = user;
    const newUser = new UserModel(name, email, password);
    registeredUsers.push(newUser);
  };

  static login = (user) => {
    const { email, password } = user;
    const userFound = registeredUsers.find((user) => user.email === email);
    return userFound;
  };
}

export default UserModel;
