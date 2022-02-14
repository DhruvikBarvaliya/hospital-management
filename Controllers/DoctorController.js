const { connection } = require('../Config/Config')

module.exports = {

    addDoctor: (req, res) => {
        let { id, full_name, email, password, age, address, gender, specialization, degree, fee, department_id } = req.body
        connection.query(`insert into doctors values('${id}','${full_name}', '${email}', '${password}', ${age}, '${address}', '${gender}', '${specialization}', '${degree}', ${fee}, ${department_id})`, (err, result) => {
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
        let id = req.query.id
        connection.query(`select * from doctors where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateDoctor: (req, res) => {
        let id = req.query.id
        let { full_name, email, password, age, address, gender, specialization, degree, fee, department_id } = req.body
        let sql = `update doctors set full_name=?, email=?, password=?, age=?, address=?, gender=?, specialization=?, degree=?, fee=?, department_id=? where id=${id}`;
        connection.query(sql, [full_name, email, password, age, address, gender, specialization, degree, fee, department_id], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteDoctor: (req, res) => {
        let id = req.query.id
        connection.query(`delete from doctors where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}