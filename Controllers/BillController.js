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
                console.log("Bill Data Inserted");
                return res.status(200).send(result)
            }
        })

    },
    getAllBill: (req, res) => {

    },
    getBillById: (req, res) => {

    },
    updateBill: (req, res) => {

    },
    deleteBill: (req, res) => {

    }

}