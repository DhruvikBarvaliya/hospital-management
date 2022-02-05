const express = require('express');
const router = express.Router()
const billCotroller = require('../Controllers/BillController')

router.get('/', (req, res) => {
    res.send("Inside Bill Router")
})

router.post('/addBill', billCotroller.addBill);
router.get('/getAllBill', billCotroller.getAllBill);
router.get('/getBillById?:id', billCotroller.getBillById);
router.put('/updateBill?:id', billCotroller.updateBill);
router.delete('/deleteBill?:id', billCotroller.deleteBill);

module.exports = router;
