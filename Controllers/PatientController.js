const { connection } = require('../Config/Config')

module.exports = {

    addPatient: (req, res) => {
        let { full_name, email, password, age, weight, gender, address, telephone, date_of_admit, room_id,
            disease, doctor_id, ssn_no, insurance_no, medical_history, blood_Type } = req.body

        connection.query(`insert into patients (full_name, email, password, age, weight, gender, address, telephone, date_of_admit, room_id,
    disease, doctor_id, ssn_no, insurance_no, medical_history, blood_Type) values ('${full_name}', '${email}', '${password}', '${age}', '${weight}', '${gender}', '${address}', '${telephone}', '${date_of_admit}', '${room_id}',
        '${disease}', '${doctor_id}', '${ssn_no}', '${insurance_no}', '${medical_history}', '${blood_Type}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getAllPatient: (req, res) => {
        connection.query(`select * from patients;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getPatientById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from patients where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updatePatient: (req, res) => {
        let id = req.params.id
        let { full_name, position, ssn, registered } = req.body
        let sql = `update patients set full_name=?, position=?, ssn=?, registered=? where id=${id}`;
        connection.query(sql, [full_name, position, ssn, registered], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deletePatient: (req, res) => {
        let id = req.params.id
        connection.query(`delete from patients where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}