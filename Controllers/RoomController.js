const { connection } = require('../Config/Config')

module.exports = {

    addRoom: (req, res) => {
        let { room_no, room_type, room_status } = req.body
        connection.query(`insert into rooms (room_no, room_type, room_status) values ('${room_no}', '${room_type}','${room_status}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })

    },
    getAllRoom: (req, res) => {
        connection.query(`select * from rooms;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getRoomById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from rooms where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateRoom: (req, res) => {
        let id = req.params.id
        let { room_no, room_type, room_status } = req.body
        let sql = `update rooms set room_no=?, room_type=?, room_status=? where id=?`;
        connection.query(sql, [room_no, room_type, room_status, id], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteRoom: (req, res) => {
        let id = req.params.id
        connection.query(`delete from rooms where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}