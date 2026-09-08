import express from "express";

const app = express();
const PORT = process.env.PORT ?? 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!", source: "NodeJS App" });
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
