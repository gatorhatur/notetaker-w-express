const { getNotes,addNote } = require('../../lib/notes')
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

    let result = addNote(req.body)

    res.json(result);
    
})

module.exports = router;