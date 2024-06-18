const express = require('express');
const router = express.Router();
const data = {};
data.employees = require('../../data/employees.json');



router.route('/')
    .get((req, res) => {
        res.json(data.employees);
    })
    .post((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .put((req, res) => {
        res.json({
            "firstname": req.body.firstname,
            "lastname": req.body.lastname
        });
    })
    .delete((req, res) => {
        res.json({ "id": req.body.id })
    });

router.route('/:id')
    .get((req, res) => {
        res.json({ "id": req.params.id });
    });

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

