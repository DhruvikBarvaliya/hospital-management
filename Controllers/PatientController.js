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
                console.log("Patient Data Inserted");
                return res.status(200).send(result)
            }
        })
    },
    getAllPatient: (req, res) => {

    },
    getPatientById: (req, res) => {

    },
    updatePatient: (req, res) => {

    },
    deletePatient: (req, res) => {

    }

}