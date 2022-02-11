const { connection } = require('../Config/Config')

module.exports = {

    addAppointment: (req, res) => {
        let { patient_id, appointment_date, appointment_time, room_id, doctor_id, consultancy_fee,
            created, appointment_status } = req.body

        connection.query(`insert into appointments ( patient_id, appointment_date, appointment_time, room_id, doctor_id, consultancy_fee,
                created, appointment_status) values ('${patient_id}, '${appointment_date}', '${appointment_time}', '${room_id}', '${doctor_id}', 
                '${consultancy_fee}','${created}', '${appointment_status}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log("Appointment Data Inserted");
                return res.status(200).send(result)
            }
        })


    },
    getAllAppointment: (req, res) => {

    },
    getAppointmentById: (req, res) => {

    },
    updateAppointment: (req, res) => {

    },
    deleteAppointment: (req, res) => {

    }

}