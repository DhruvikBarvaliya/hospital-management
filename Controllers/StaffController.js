const { connection } = require('../Config/Config')

module.exports = {

    addStaff: (req, res) => {
        let { job_title, full_name, gender, telephone, salary } = req.body
        connection.query(`insert into staffs (job_title, full_name, gender, telephone, salary) values ('${job_title}', '${full_name}', '${gender}', '${telephone}', '${salary}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })

    },
    getAllStaff: (req, res) => {
        connection.query(`select * from staffs;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getStaffById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from staffs where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateStaff: (req, res) => {
        let id = req.params.id
        let { job_title, full_name, gender, telephone, salary } = req.body
        let sql = `update staffs set job_title=?, full_name=?, gender=?, telephone=?, salary=? where id=${id}`;
        connection.query(sql, [job_title, full_name, gender, telephone, salary], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteStaff: (req, res) => {
        let id = req.params.id
        connection.query(`delete from staffs where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}