const { getNotes,addNote } = require('../../lib/notes')
const router = require('express').Router()



router.get('/notes', (req, res) => {
    let result = getNotes();
    console.log(result)
    res.json(result)
})

router.post('/notes', (req, res) => {
    res.send("Note creation is working")
})

module.exports = router;