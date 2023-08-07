const express = require('express')
const route = require('routers')
const mongoose = require('mongoose')
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, './.env') });
const app = express()
const router = require("./src/routes")
const corsOptions = {
  allowedHeaders: ['Content-Type', 'Authorization']
}
const cors = require('cors');

app.use(express.static("public"));
app.set("json spaces", 2)
app.use(express.json());
app.use(router)
app.use(cors(corsOptions));

console.log(process.env.PORT)

mongoose.connect(process.env.DATABASE_URL)
  .then(() => {
    console.log("DB Connected");
    app.listen({ port: process.env.PORT }, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });
  })

  .catch((err) => {
    console.log("There was an error on the DB connection.");
    console.log(err);
  });