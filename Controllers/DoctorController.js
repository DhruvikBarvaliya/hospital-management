const { connection } = require('../Config/Config')

module.exports = {

    addDoctor: (req, res) => {
        let { full_name, email, password, age, address, gender, specialization, degree, fee, department_id } = req.body
        connection.query(`insert into doctors values('${full_name}', '${email}', '${password}', '${age}', '${address}', '${gender}', '${specialization}', '${degree}', '${fee}', '${department_id}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getAllDoctor: (req, res) => {
        connection.query(`select * from doctors;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getDoctorById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from doctors where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateDoctor: (req, res) => {
        let id = req.params.id
        let { full_name, position, ssn, registered } = req.body
        let sql = `update doctors set full_name=?, position=?, ssn=?, registered=? where id=${id}`;
        connection.query(sql, [full_name, position, ssn, registered], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteDoctor: (req, res) => {
        let id = req.params.id
        connection.query(`delete from doctors where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}