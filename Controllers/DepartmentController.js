const { connection } = require('../Config/Config')

module.exports = {

    addDepartment: (req, res) => {
        let { department_name, head_name, no_of_worker } = req.body

        connection.query(`insert into departments (department_name, head_name, no_of_worker) values ('${department_name}', '${head_name}', '${no_of_worker}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })


    },
    getAllDepartment: (req, res) => {
        connection.query(`select * from departments;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getDepartmentById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from departments where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateDepartment: (req, res) => {
        let id = req.params.id
        let {department_name, head_name, no_of_worker } = req.body
        let sql = `update departments set department_name=?, head_name=?, no_of_worker=? where id=${id}`;
        connection.query(sql, [department_name, head_name, no_of_worker], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteDepartment: (req, res) => {
        let id = req.params.id
        connection.query(`delete from departments where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}