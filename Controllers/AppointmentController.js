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
                return res.status(200).send(result)
            }
        })
    },
    getAllAppointment: (req, res) => {
        connection.query(`select * from appointments;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getAppointmentById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from appointments where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateAppointment: (req, res) => {
        let id = req.params.id
        let { full_name, position, ssn, registered } = req.body
        let sql = `update appointments set full_name=?, position=?, ssn=?, registered=? where id=${id}`;
        connection.query(sql, [full_name, position, ssn, registered], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteAppointment: (req, res) => {
        let id = req.params.id
        connection.query(`delete from bills where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}