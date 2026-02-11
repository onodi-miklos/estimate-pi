
    const express = require('express')
    const path = require('path')
    const app = express()

    app.use([express.json(), express.urlencoded({ extended: true }), express.static(path.join(__dirname, './public'))])


    app.listen(5000, () => {
    console.log('Server listening on port 5000....')
    })
    