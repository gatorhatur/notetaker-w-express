const { getNotes,addNote,deleteNote } = require('../../lib/notes')
const router = require('express').Router()



router.get('/notes', (req, res) => {
    let result = getNotes();
    console.log(result)
    res.json(result)
})

router.post('/notes', (req, res) => {
    if (!req.body) {
        res.sendStatus(406)
    }

    console.log(req.body)
    let result = addNote(req.body)

    res.json(result);
    
})

router.delete('/notes/:id', (req, res) => {
    if (!req.query) {
        res.sendStatus(406)
    }
    console.log(req.params.id);
    deleteNote(req.params.id)
    res.sendStatus(200)
})

module.exports = router;