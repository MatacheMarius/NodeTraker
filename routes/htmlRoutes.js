// Series of npm packages that we will use to give our server useful functionality

const express = require("express");
const path = require("path");
const router = express.Router();

// GET is used to request data form notes.html and index.html 
// / = Note traker
// I use res.sendFile() function basically transfers the file at the given path and it sets the Content-Type response HTTP header field based on the filename extension.
// i use path.join() method to joins the specified path segments
router.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/notes.html"));
});
router.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = router

