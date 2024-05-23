import express from "express";
import ejsLayouts from "express-ejs-layouts";
import path from "path";

import UserController from "./src/controllers/user.controller.js";

const userController = new UserController();

const PORT = 3200;

// constructing the path
const folderPath = path.resolve("public");

// using express
const app = express();

// using json parser
app.use(express.json());

app.set("view engine", "ejs");
app.set("views", path.join(path.resolve(), "src", "views"));
app.use(ejsLayouts);

// applying static path
app.use(express.static(folderPath));

app.get("/", userController.getHome);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
