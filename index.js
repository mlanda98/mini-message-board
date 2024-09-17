const express = require("express");
const path = require("path");
const indexRoutes = require
('./routes/index');
const newMessageRoutes = require('./routes/newMessages');
const app = express();
const port = process.env.PORT || 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.urlencoded({extended:false}));

app.use("/", indexRoutes);
app.use("/new", newMessageRoutes);

app.locals.messages = [
  { id: 1, text: "Hi there!", user: "Amando", added: new Date() },
  { id: 2, text: "Hello World!", user: "Charles", added: new Date() },
];


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})

