const express = require('express')
const router = express.Router();

const Student = require('../Controllers/StudentsController')



// router api
router.post('/create-student', Student.createStudent);
router.get('/list-student', Student.listStudent);
router.get('/delete-student/:id', Student.deleteStudent);
router.post('/update-student/:id', Student.updateStudent);





module.exports = router;