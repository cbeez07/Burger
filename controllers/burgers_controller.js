const express = require('express');
const burger = require('../models/burger');

const router = express.Router();

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let burgerObject = {
            burger: data
        };
        console.log(burgerObject);
        res.render('index', burgerObject);
    });
});

router.post('/api/burgers', (req,res) => {
    console.log('post one');
    
    burger.insertOne([req.body.name], (result) => {
        res.json({ id: result.insertID });
    });
});

router.put('/api/burgers/:id', (req, res) => {
    console.log(req.params.id);
    
    burger.updateOne([req.params.id], (result) => {
        if (result.changedRows ===0 ) {
            return res.status(404).end();
        }
        re.status(200).end();
    });
     
});

module.exports = router;