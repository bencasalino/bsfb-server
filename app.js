const express = require("express");
const queries = require("./queries");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
// middleware
app.use(cors());
app.use(bodyParser.json());



// this displays both tables
app.get("/", (request, response) => {
  queries
    .list("managers")
    .then(managers =>
      response.json({
        managers: managers
      })
    )
    .catch(console.error);
});
// shows the managers table
app.get("/managers", (request, response) => {
  queries
    .list("managers")
    .then(capstone => {
      response.json({ capstone });
    })
    .catch(console.error);
});
// gets the managers data table by location name
app.get("/managers/:location", (request, response) => {
  queries
    .read(request.params.location, "managers")
    .then(managers => {
      managers ? response.json({ managers }) : response.sendStatus(404);
    })
    .catch(console.error);
});

// it hit none of the paths
app.use((request, response) => {
  response.sendStatus(404);
});
// export entire app
module.exports = app;
