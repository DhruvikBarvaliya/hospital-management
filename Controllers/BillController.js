const { connection } = require('../Config/Config')

module.exports = {

    addBill: (req, res) => {
        let { bill_no, patiant_id, no_of_days_admit, treatment_name, doctor_charge, medicine_charge, room_charge, operation_charge,
            nursing_charge, lab_charge, health_card, date_time_admitted, advance, total_bill } = req.body

        connection.query(`insert into bills ( bill_no, patiant_id, no_of_days_admit, treatment_name, doctor_charge, medicine_charge, room_charge,
             operation_charge,nursing_charge, lab_charge, health_card, date_time_admitted, advance, total_bill) values ('${bill_no}', '${patiant_id}',
              '${no_of_days_admit}', '${treatment_name}', '${doctor_charge}', '${medicine_charge}', '${room_charge}', '${operation_charge}','${nursing_charge}', 
              '${lab_charge}', '${health_card}', '${date_time_admitted}', '${advance}', '${total_bill}')`, (err, result) => {
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
        let id = req.query.id
        connection.query(`select * from bills where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    },
    updateBill: (req, res) => {
        let id = req.query.id
        let { bill_no, patiant_id, no_of_days_admit, treatment_name, doctor_charge, medicine_charge, room_charge, operation_charge,
            nursing_charge, lab_charge, health_card, date_time_admitted, advance, total_bill } = req.body
        let sql = `update bills set bill_no=?, patiant_id=?, no_of_days_admit=?, treatment_name=?, doctor_charge=?, medicine_charge=?, room_charge=?, operation_charge=?,
        nursing_charge=?, lab_charge=?, health_card=?, date_time_admitted=?, advance=?, total_bill=? where id=${id}`;
        connection.query(sql, [bill_no, patiant_id, no_of_days_admit, treatment_name, doctor_charge, medicine_charge, room_charge, operation_charge,
            nursing_charge, lab_charge, health_card, date_time_admitted, advance, total_bill], (err, result) => {
                if (err) {
                    throw err;
                } else {
                    return res.status(200).send(result)
                }
            })
    },
    deleteBill: (req, res) => {
        let id = req.query.id
        connection.query(`delete from bills where id=${id};`, (err, result) => {
            if (err) {
                throw err;
            } else {
                return res.status(200).send(result)
            }
        })
    }

}