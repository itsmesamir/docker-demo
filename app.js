// const express = require("express");
// const app = express();
// const PORT = process.env.PORT || 3000;

// app.get("/", (req, res) => {
//   res.send("Hello from Dockerized Node.js app. I am here inside the container!");
// });

// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const fs = require("fs");
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

console.log("hello world inside the test.js file");

// Log every request to a file
app.use((req, res, next) => {
  console.log("test");
  const { method, url } = req;
  const log = `${method} ${url}\n`;
  fs.writeFile("requests.js", log, (err) => {
    if (err) {
      console.log(err);
    }
  });

  next();
});

app.get("/", (req, res) => {
  res.send("Hello from Dockerized Node.js app with volume!");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
