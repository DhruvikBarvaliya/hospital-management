const { connection } = require('../Config/Config')

module.exports = {

    addBill: (req, res) => {
        let { bill_no, patiant_id, no_of_days_admit, treatment_name, doctor_charge, medicine_charge, room_charge, operation_charge,
            nursing_charge, lab_charge, health_card, date_time_admitted, advance, total_bill } = req.body

        connection.query(`insert into bills ( bill_no, patiant_id, no_of_days_admit, treatment_name, doctor_charge, medicine_charge, room_charge,
             operation_charge,nursing_charge, lab_charge, health_card, date_time_admitted, advance, total_bill) values ('${bill_no}', '${patiant_id}',
              '${no_of_days_admit}', '${treatment_name}', '${doctor_charge}', '${medicine_charge}', '${room_charge}', '${operation_charge}','${nursing_charge}', 
              '${lab_charge}', '${health_card}', '${date_time_admitted}', '${advance}', '${total_bill}'`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })

    },
    getAllBill: (req, res) => {
        connection.query(`select * from bills;`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    getBillById: (req, res) => {
        let id = req.params.id
        connection.query(`select * from bills where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateBill: (req, res) => {
        let id = req.params.id
        let { full_name, position, ssn, registered } = req.body
        let sql = `update bills set full_name=?, position=?, ssn=?, registered=? where id=${id}`;
        connection.query(sql, [full_name, position, ssn, registered], (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    deleteBill: (req, res) => {
        let id = req.params.id
        connection.query(`delete from bills where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}