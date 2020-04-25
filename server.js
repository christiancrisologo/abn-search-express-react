const express = require("express");
const path = require("path");
const bodyParser = require("body-parser");
const fetch = require("node-fetch");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, "client/build")));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// for local dev not for production
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

function send(res, result, status = 200) {
  res.status(status);
  res.send(result);
}

const ABR_URL = "https://abr.business.gov.au/json";
const GUID = process.env.ABR_GUID;

app.get("/abn/:key", async (req, res) => {
  console.log("#CC searching by abn ", req.params.key, GUID);

  const response = await fetch(
    `${ABR_URL}/AbnDetails.aspx?abn=${req.params.key}&callback=callback&guid=${GUID}`
  );
  const contents = await response.text();
  const result = JSON.parse(
    contents.substring("callback(".length, contents.length - 1)
  );
  send(res, result);
});

app.get("/company/:key", async (req, res) => {
  console.log("#CC searching by company ", req.params.key, GUID);

  const response = await fetch(
    `${ABR_URL}/MatchingNames.aspx?name=${req.params.key}&maxResults=20&callback=callback&guid=${GUID}`
  );
  const contents = await response.text();
  const result = JSON.parse(
    contents.substring("callback(".length, contents.length - 1)
  );
  send(res, result);
});

// Handles any requests that don't match the ones above
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/client/build/index.html"));
});

const port = process.env.PORT || 5000;
app.listen(port);

console.log("App is listening on port " + port);
