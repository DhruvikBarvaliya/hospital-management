const express = require('express');
const router = express.Router()
const patientCotroller = require('../Controllers/PatientController')

router.get('/', (req, res) => {
    res.send("Inside Patient Router")
})

router.post('/addPatient', patientCotroller.addPatient);
router.get('/getAllPatient', patientCotroller.getAllPatient);
router.get('/getPatientById?:id', patientCotroller.getPatientById);
router.put('/updatePatient?:id', patientCotroller.updatePatient);
router.delete('/deletePatient?:id', patientCotroller.deletePatient);

module.exports = router;
