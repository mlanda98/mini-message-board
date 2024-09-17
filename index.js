const express = require("express");
const path = require("path");
const indexRoutes = require
('./routes/index');
const newMessageRoutes = require('./routes/newMessages');

const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.use(express.urlencoded({extended:true}));

app.use("/", indexRoutes);
app.use("/new", newMessageRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

