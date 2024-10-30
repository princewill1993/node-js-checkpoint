import express from "express";
import fs from "fs";
import pkg from "generate-password";


const { generatepassword } = pkg;
const app = express();
const port = 3000;

fs.writeFileSync("Welcome.txt", "Hello Node", "utf-8");

//  creating a program that reads and console.log data from hello.txt

fs.readFile("Welcome.txt", "utf-8", (err, data) => {
  if (err) {
    console.log(err);
  }
  return console.log(data);
});

app.get("/", (req, res) => {
  res.send("<h1>Hello Node!!!!</h1>\n");
});

// A program that runs on port 3000...
app.listen(port, () => {
  console.log("Server started successfuly");
});

console.log("HELLO WORLD");
