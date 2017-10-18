import express from 'express';
var Car = require('../database/car');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({data: []});
})

router.get('/cars/years', (req, res) => {
    var carlist = {};

    // Car.find(function(error, ids) {
    //     // ids is an array of all ObjectIds
    //     res.send(ids);
    // });

    Car.find().distinct("year", function(error, ids) {
        // ids is an array of all ObjectIds
        res.send(ids);
    });
})


export default router;