const express = require('express')
const fetchuser = require('../middleware/fecthuser')
const { body, validationResult } = require('express-validator')
const Notes = require("../models/Notes");
const router = express.Router()
//Route 1 : Feacth all note
router.get("/fectnote", fetchuser, async (req, res) => {

    try {
        const note = await Notes.find({ user: req.user.id })

        res.json(note)

    } catch (error) {
        // Respond with an error message
        console.error(error);
        res.status(500).json({ error: "Internal Server Error", });

    }
})
//Route 2 :add note from user note

router.post("/addnote", fetchuser, [[
    body('title', "Enter a valid a title").exists(),
    body('disc', "Enter a dicripstion more then 8 charectar").isLength({ min: 8 }),
    body('tag', "Enter a valid a title").exists(),
]], async (req, res) => {
    const { title, disc, tag } = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }
    try {
        const note = await new Notes({
            title, disc, tag,
            user: req.user.id

        })
        savenote = await note.save()
        res.status(200).json(savenote)

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error", });

    }




})

//Route 2 :update note from user note
router.put("/update/:id", fetchuser, async (req, res) => {
    const { title, disc, tag } = req.body;

    const newnote = {}

    if (title) { newnote.title = title }
    if (disc) { newnote.disc = disc }
    if (tag) { newnote.tag = tag }
    try {



        let note = await Notes.findById(req.params.id)
        //    console.log(note)
        //    console.log(req.user)
        //    console.log(note)
        if (!note) {
            return res.status(404).send("NOT FOUND")
        }

        // if(note.user !== req.user){
        //     return res.status(401).send("not allowed")
        // }

        note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true })
        res.json(note)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error or id is wrong", });
    }

})

//Route 2 : Delete a  note from user note
router.delete("/delete/:id", fetchuser, async (req, res) => {
    try {
    let note = await Notes.findById(req.params.id)
    if(!note){
        return res.status(404).send("NOT FOUND.")
    }
     let notess= await Notes.findByIdAndDelete(req.params.id)
     res.status(200).send("Scuessfully  delete the notes")
    //  console.log(notess)
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error or id is wrong", });
        
    }

})

module.exports = router