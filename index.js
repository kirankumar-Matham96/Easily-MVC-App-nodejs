import express from "express";

const PORT = 3200;

// using express
const app = express();

// using json parser
app.use(express.json());

// applying static path
app.use(express.static("public"));

app.get("/", (req, res) => {
  // res.status(200).send({ message: "Welcome to Easily App" });
  res.status(200).send("/index.html");
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
