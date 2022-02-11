const { connection } = require('../Config/Config')

module.exports = {

    addDepartment: (req, res) => {
        let { full_name, head_name, workers } = req.body

        connection.query(`insert into departments (full_name, head_name, workers) values ('${full_name}', '${head_name}', '${workers}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log("Department Data Inserted");
                return res.status(200).send(result)
            }
        })


    },
    getAllDepartment: (req, res) => {

    },
    getDepartmentById: (req, res) => {

    },
    updateDepartment: (req, res) => {

    },
    deleteDepartment: (req, res) => {

    }

}