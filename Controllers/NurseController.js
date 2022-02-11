const { connection } = require('../Config/Config')

module.exports = {

    addNurse: (req, res) => {

        let { full_name, position, ssn, registered } = req.body
        connection.query(`insert into nurses (full_name, position, ssn, registered) values ('${full_name}', '${position}', '${ssn}', '${registered}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log("Appointments Data Inserted");
                return res.status(200).send(result)
            }
        })
    },
    getAllNurse: (req, res) => {

    },
    getNurseById: (req, res) => {

    },
    updateNurse: (req, res) => {

    },
    deleteNurse: (req, res) => {

    }

}