const { connection } = require('../Config/Config')

module.exports = {

    addStaff: (req, res) => {
        let { job_title, full_name, gender, telephone, salary } = req.body
        connection.query(`insert into staffs (job_title, full_name, gender, telephone, salary) values ('${job_title}', '${full_name}', '${gender}', '${telephone}', '${salary}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log("Staff Data Inserted");
                return res.status(200).send(result)
            }
        })

    },
    getAllStaff: (req, res) => {

    },
    getStaffById: (req, res) => {

    },
    updateStaff: (req, res) => {

    },
    deleteStaff: (req, res) => {

    }

}