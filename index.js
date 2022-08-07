const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
const studentRoute = require("./app/routes/student.routes");

const app = express();

const corsOptions = {
  origin: "http://localhost:3000",
};
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Library API",
      version: "1.0.0",
      description: "A simple Express Library API",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./app/routes/*.js"],
};

const specs = swaggerJsDoc(options);

// Setup server port
const port = process.env.PORT || 4000;

app.use(cors());
// parse requests of content-type: application/json
app.use(bodyParser.json());
// parse requests of content-type: application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Hello world" });
});
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));
app.use("/api/student", studentRoute);

// listen for requests
app.listen(port, () => {
  console.log(`Server is listening on http://localhost:${port}`);
});
