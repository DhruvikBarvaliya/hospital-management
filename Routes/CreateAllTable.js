const express = require('express');
const router = express.Router()
const createAllTableCotroller = require('../Controllers/CreateAllTableCotroller')

router.get('/', (req, res) => {
    res.send("Inside Create All Table Cotroller Router")
})

router.get('/createAllTable', createAllTableCotroller.createAllTable);

module.exports = router;
