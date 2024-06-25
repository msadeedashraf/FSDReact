const express = require('express');
const router = express.Router();
const employeesController = require('../../controlers/employeeController');


router.route('/')
    .get(employeesController.getAllEmployees)
    .post(employeesController.createEmployee)
    .put(employeesController.updateEmployee)
    .delete(employeesController.deleteEmployee);

router.route('/:id')
    .get(employeesController.getEmployee);

module.exports = router;



/*
const express = require('express');
const router = express.Router();

const data = {};
data.employees = require('../../data/employees.json');


router.route('/')
.get ((res, req)=>{
res.json(data.employees);
})
.post((res, req)=>{
res.json({

    "firstname" : req.body.firstname,
    "lastname":  req.body.lastname
}

);
})
.put((res, req)=>{
    res.json({

        "firstname" : req.body.firstname,
        "lastname":  req.body.lastname
    }
    
    );
})
.delete((res, req)=>{
res.json({
    "id" : req.body.id
});
});

//http://localhost:3400/employees
//http://localhost:3400/employees/1

router.route('/:id')
.get ((res, req)=>{
    res.json({"id": req.params.id});
    });
    

/*
router.get()
router.put()
*/






/*
module.exports = router;*/

