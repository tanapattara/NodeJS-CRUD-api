const express = require("express");
const bodyParser = require("body-parser");

const app = express();
// Setup server port
const port = process.env.PORT || 8000;

// parse requests of content-type: application/json
app.use(bodyParser.json());

// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

require("./app/routes/student.routes")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
