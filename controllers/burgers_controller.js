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

module.exports = router;