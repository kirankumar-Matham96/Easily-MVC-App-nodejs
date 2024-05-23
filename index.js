import express from "express";

const PORT = 3200;

// using express
const app = express();

// using json parser
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send({ message: "Welcome to Easily App" });
});

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
