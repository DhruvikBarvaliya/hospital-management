const express = require('express');
const router = express.Router();
const roomCotroller = require('../Controllers/RoomController')

router.get('/', (req, res) => {
    res.send("Inside Room Router")
})

router.post('/addRoom', roomCotroller.addRoom);
router.get('/getAllRoom', roomCotroller.getAllRoom);
router.get('/getRoomById/:id', roomCotroller.getRoomById);
router.put('/updateRoom/:id', roomCotroller.updateRoom);
router.delete('/deleteRoom/:id', roomCotroller.deleteRoom);

module.exports = router;