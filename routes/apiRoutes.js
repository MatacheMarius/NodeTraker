// Series of npm packages that we will use to give our server useful functionality

const fs = require("fs");
const path = require("path");
const express = require("express");
const router = express.Router();
const shortid = require("shortid");
// require from db.json
let jason = require("../db/db.json");

// i create a constructor with for router and i use:
// GET is used to request data
// POST is used to send data to a server and i create my own api notes
// i have 2 parameters req and res
// i use res.json sends a JSON response utilizând metoda JSON.stringify ().
// JSON.stringify () i use for fs.writeFile
router.get("/api/notes", (req, res) => {
    res.json(jason);
});
// in pakage Jason i have title text and id ... and i require the id const shortid = require("shortid");
router.post("/api/notes", (req, res) => {
    // console.log(req.body);
    let newNote = {
        title: req.body.title,
        text: req.body.text,
        id: shortid.generate()
    }
    // i have fs.writeFile... when i add a new notes will show in db.json
    // i use  if (err) throw err...if i will have any errors, execution of the current function will stop.
    jason.push(newNote)
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(jason), err => {
        if (err) throw err;
        console.log("Added a new note")
        res.json(jason);
    })
});
// i have delete .. if i want to delete somthing form server json will do it for me
router.delete("/api/notes/:id", (req, res) => {
    let notes = jason;
    let newNotes = notes.filter(noteD => noteD.id !== req.params.id);
    jason = newNotes;
    fs.writeFile(path.join(__dirname, "../db/db.json"), JSON.stringify(newNotes), err => {
        if (err) throw err;
        console.log("Note deleted")
        res.json(newNotes);
    });

});


module.exports = router;











