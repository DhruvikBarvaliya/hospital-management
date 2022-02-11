const { connection } = require('../Config/Config')

module.exports = {

    addDoctor: (req, res) => {
        let { full_name, email, password, age, address, gender, specialization, degree, fee, department_id } = req.body
        connection.query(`insert into doctors values('${full_name}', '${email}', '${password}', '${age}', '${address}', '${gender}', '${specialization}', '${degree}', '${fee}', '${department_id}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log("Doctor Table created");
                return res.status(200).send(result)
            }
        })
    },
    getAllDoctor: (req, res) => {

    },
    getDoctorById: (req, res) => {

    },
    updateDoctor: (req, res) => {

    },
    deleteDoctor: (req, res) => {

    }

}