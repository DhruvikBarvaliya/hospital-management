const express = require('express');
const router = express.Router()
const doctorRoute = require('./DoctorRoute');
const nurseRoute = require('./NurseRoute');
const patient = require('./Patient');
const roomRoute = require('./RoomRoute');
const billRoute = require('./BillRoute');
const departmentRoute = require('./DepartmentRoute');
const appointmentRoute = require('./AppointmentRoute');
const staffRoute = require('./StaffRoute');
const createAllTable = require('./CreateAllTable')

router.get('/', (req, res) => {
    res.send("Inside Index Router")
})

router.use('/api',
    doctorRoute,
    nurseRoute,
    patient,
    roomRoute,
    billRoute,
    departmentRoute,
    appointmentRoute,
    staffRoute,
    createAllTable
)

module.exports = router;

