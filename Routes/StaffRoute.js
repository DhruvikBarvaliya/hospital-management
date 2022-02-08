const express = require('express');
const router = express.Router()
const staffCotroller = require('../Controllers/StaffController')

router.get('/', (req, res) => {
    res.send("Inside Staff Router")
})

router.post('/addStaff', staffCotroller.addStaff);
router.get('/getAllStaff', staffCotroller.getAllStaff);
router.get('/getStaffById/:id', staffCotroller.getStaffById);
router.put('/updateStaff/:id', staffCotroller.updateStaff);
router.delete('/deleteStaff/:id', staffCotroller.deleteStaff);

module.exports = router;
