const express = require('express');
const router = express.Router()
const departmentCotroller = require('../Controllers/DepartmentController')

router.get('/', (req, res) => {
    res.send("Inside Department Router")
})

router.post('/addDepartment', departmentCotroller.addDepartment);
router.get('/getAllDepartment', departmentCotroller.getAllDepartment);
router.get('/getDepartmentById/:id', departmentCotroller.getDepartmentById);
router.put('/updateDepartment/:id', departmentCotroller.updateDepartment);
router.delete('/deleteDepartment/:id', departmentCotroller.deleteDepartment);

module.exports = router;
