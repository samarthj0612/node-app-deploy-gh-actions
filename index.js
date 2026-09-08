import express from "express";

const app = express();
const PORT = process.env.PORT ?? 5000;

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello World!", source: "NodeJS App" });
});

app.get("/health", (req, res) => {
  res.status(200).json({ message: "Server is healthy!", source: "NodeJS App" });
});

app.get("/about", (req, res) => {
  res.status(200).json({ message: "This is a NodeJS App!", source: "NodeJS App" });
});

app.get("/contact", (req, res) => {
  res.status(200).json({ message: "Contact us at samarthjain.work@email.com", source: "NodeJS App" });
});

app.get("/crash", (req, res) => {
  res.status(500).json({ message: "Server is crashing!", source: "NodeJS App" });
  process.exit(1);
});

app.listen(PORT, () => {
  console.log(`Server is up and running on port ${PORT}`);
});
