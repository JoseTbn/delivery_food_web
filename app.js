// index.js

/**
 * Required External Modules
 */
 const express = require("express");
 const path = require("path");
 /**
  * App Variables
  */
 const app = express();
 const port = process.env.PORT || "8000";
 /**
  *  App Configuration
  */
 app.set("views", path.join(__dirname, "./views"));
 app.set("view engine", "ejs");
 app.use(express.static(__dirname + "/public"));

// app.use('/css', express.static(__dirname + 'public/css'))
// app.use('/js', express.static(__dirname + 'public/js'))
// app.use('/img', express.static(__dirname + 'public/img'))


 /**
  * Routes Definitions
  */
 
 app.get("/", (req, res) => {
   res.render("index", { title: "Home" });
 });
 /**
  * Server Activation
  */
 
 app.listen(port, () => {
   console.log(`Listening to requests on http://localhost:${port}`);
 });
 