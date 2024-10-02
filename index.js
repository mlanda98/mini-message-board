const express = require("express");
const path = require("path");
const indexRoutes = require
('./routes/index');
const newMessageRoutes = require('./routes/newMessages');
const app = express();
const port = process.env.PORT || 3000;
const {Pool} = require("pg");
require("dotenv").config();

const pool = new Pool({
user: process.env.PGUSER,
host: process.env.PGHOST,
database: process.env.PGDATABASE,
password: process.env.PGPASSWORD,
port: process.env.PGPORT,
ssl: {
  rejectUnauthorized: false,
}
});

if (process.env.NODE_ENV === "development"){
  pool.options.ssl = false;
}
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:false}));

app.use((req, res, next) => {
  req.pool = pool;
  next();
})
app.use("/", indexRoutes);
app.use("/new", newMessageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

pool.query("SELECT NOW()", (err, res) => {
  if (err) {
    console.error("Error connecting to the database:", err);
  } else {
    console.log("Database connected:", res.rows);
  }
});