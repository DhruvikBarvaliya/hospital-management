const { connection } = require('../Config/Config')

module.exports = {

    addRoom: (req, res) => {
        let { room_no, room_type, room_status } = req.body
        connection.query(`insert into rooms (room_no, room_type, room_status) values ('${room_no}', '${room_type}','${room_status}')`, (err, result) => {
            if (err) {
                throw err;
            } else {
                console.log("Room Data Inserted");
                return res.status(200).send(result)
            }
        })

    },
    getAllRoom: (req, res) => {

    },
    getRoomById: (req, res) => {

    },
    updateRoom: (req, res) => {

    },
    deleteRoom: (req, res) => {

    }

}