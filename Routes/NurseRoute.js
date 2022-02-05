const express = require('express');
const router = express.Router()
const nurseCotroller = require('../Controllers/NurseController')

router.get('/', (req, res) => {
    res.send("Inside Nurse Router")
})

router.post('/addNurse', nurseCotroller.addNurse);
router.get('/getAllNurse', nurseCotroller.getAllNurse);
router.get('/getNurseById/:id', nurseCotroller.getNurseById);
router.put('/updateNurse/:id', nurseCotroller.updateNurse);
router.delete('/deleteNurse/:id', nurseCotroller.deleteNurse);

module.exports = router;
