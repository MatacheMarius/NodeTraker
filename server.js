// Series of npm packages that we will use to give our server useful functionality
const express = require("express");
const app = express();
const apiRoutes = require("./routes/apiRoutes");
const htmlRouter = require("./routes/htmlRoutes");

// i set a port and after i will use in app.listen
// note server.js and the listening will show me my port in the console 
// after http://localhost:3000/ to see the project
const PORT = process.env.PORT || 3000;

// I set the expres to handle data
// When the user visit or request data from url, the server will answer
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(apiRoutes);
app.use(htmlRouter);

// i create a listen to start my server 
app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});
