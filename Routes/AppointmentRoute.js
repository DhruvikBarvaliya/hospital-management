const express = require('express');
const router = express.Router()
const appointmentCotroller = require('../Controllers/AppointmentController')

router.get('/', (req, res) => {
    res.send("Inside Appointment Router")
})

router.post('/addAppointment', appointmentCotroller.addAppointment);
router.get('/getAllAppointment', appointmentCotroller.getAllAppointment);
router.get('/getAppointmentById?:id', appointmentCotroller.getAppointmentById);
router.put('/updateAppointment?:id', appointmentCotroller.updateAppointment);
router.delete('/deleteAppointment?:id', appointmentCotroller.deleteAppointment);

module.exports = router;
