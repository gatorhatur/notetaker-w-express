const express = require('express')
const {data} = require('./db/db.json')

const app = express()







app.listen(3001, () => {
    console.log(`Api Server now listening on port 3001`);
})