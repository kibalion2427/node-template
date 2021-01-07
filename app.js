const path = require("path");

const rootDir = require("./utils/path");

const express = require("express");
const bodyParser = require("body-parser");


const app = express();

const notFoundController = require("./controllers/404");

//TEMPLATE ENGINE

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");

const shopRoutes = require("./routes/shop");

//middlewares

app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(path.join(__dirname, "public")));

app.use("/admin", adminRoutes);

app.use(shopRoutes);

app.use(notFoundController.notFound);

app.listen(5000, () => {
  console.log("Server listen on port 5000");
});
