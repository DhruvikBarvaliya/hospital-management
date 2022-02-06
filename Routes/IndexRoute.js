const express = require('express');
const router = express.Router()
const doctorRoute = require('./DoctorRoute');
const nurseRoute = require('./NurseRoute');
const patient = require('./Patient');
const roomRoute = require('./RoomRoute');
const billRoute = require('./BillRoute');

router.get('/', (req, res) => {
    res.send("Inside Index Router")
})

router.use('/api',
    doctorRoute,
    nurseRoute,
    patient,
    roomRoute,
    billRoute
)

module.exports = router;

