const express = require("express");
const handlebars = require("express-handlebars");
const path = require("path");
const mongoose = require("mongoose");

const routes = require("./routes");

const app = express();

//todo change db name
mongoose
  .connect(`mongodb://127.0.0.1:27017/petstagram`)
  .then(() => console.log("DB connected successdully"))
  .catch((err) => console.log("DB error,", err.message));

app.get("/", (req, res) => {
  res.render("home");
});
//config handlebars
app.engine(
  "hbs",
  handlebars.engine({
    extname: "hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "src/views");

app.use(express.static(path.resolve(__dirname, "public")));
app.use(express.urlencoded({ extended: false }));

app.listen(3000, console.log("3000"));
