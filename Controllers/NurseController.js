const { connection } = require('../Config/Config')

module.exports = {

    addNurse: (req, res) => {

        let { full_name, position, ssn, registered } = req.body
        connection.query(`insert into nurses (full_name, position, ssn, registered) values ('${full_name}', '${position}', '${ssn}', '${registered}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getAllNurse: (req, res) => {
        connection.query(`select * from nurses;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getNurseById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from nurses where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateNurse: (req, res) => {
        let id = req.params.id
        let { full_name, position, ssn, registered } = req.body
        // connection.query(`UPDATE nurses SET full_name='${full_name}', position='${position}', ssn='${ssn}', registered='${registered}' where id='${id}';`
        let sql = `update nurses set full_name=?, position=?, ssn=?, registered=? where id=?`;
        connection.query(sql, [full_name, position, ssn, registered, id], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteNurse: (req, res) => {
        let id = req.params.id
        connection.query(`delete from nurses where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}