const express = require('express');
const router = express.Router()
const doctorCotroller = require('../Controllers/DoctorController')

router.get('/', (req, res) => {
    res.send("Inside Doctor Router")
})

router.post('/addDoctor', doctorCotroller.addDoctor);
router.get('/getAllDoctor', doctorCotroller.getAllDoctor);
router.get('/getDoctorById?:id', doctorCotroller.getDoctorById);
router.put('/updateDoctor?:id', doctorCotroller.updateDoctor);
router.delete('/deleteDoctor?:id', doctorCotroller.deleteDoctor);

module.exports = router;
