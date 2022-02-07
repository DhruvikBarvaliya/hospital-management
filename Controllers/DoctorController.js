const { connection } = require('../Config/Config')

module.exports = {

    addDoctor: (req, res) => {
        connection.query('create table doctors (id int(11) not null AUTO_INCREMENT primary key ,doctorname varchar(255));', (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log("Table created");
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