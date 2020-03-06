const express = require("express");
const app = express();
const massive = require("massive");
require('dotenv').config()

const {DB_USER, DB_PASS, DB_NAME, DB_HOST}=process.env

app.listen(8000, () => {
  massive({
    user: DB_USER,
    password: DB_PASS,
    database: DB_NAME,
    // port: DB_PORT,
    // ssl: true,
    host: DB_HOST
  })
    .then(db => {
      app.set("db", db);
      console.log("database connected");
    })
    .catch(err => console.log(err, "db connect err"));

  console.log("listening on ", 8000);
});
