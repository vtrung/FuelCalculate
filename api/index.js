import express from 'express';
var Car = require('../database/car');

const router = express.Router();

router.get('/', (req, res) => {
    res.send({data: []});
})

router.get('/cars/years', (req, res) => {
    Car.find().distinct("year", (error, years) => {
        // ids is an array of all ObjectIds
        res.send(years);
    });
})

router.get('/cars/id/:id', (req, res) =>{
    Car.find(
        {
            '_id':req.params['id']
        },
        (err, cars) => {
            res.send(cars);
        }
    )
})

router.get('/cars/year/:year', (req, res) =>{
    Car.find({'year':req.params['year']})
    .distinct("make", (error, makes) => {
        // ids is an array of all ObjectIds
        res.send(makes);
    });
})

router.get('/cars/year/:year/make/:make', (req, res) =>{
    Car.find(
        {
            'year':req.params['year'],
            'make':req.params['make']
        }
    )
    .distinct("model", (error, models) => {
        res.send(models);
    });
})

router.get('/cars/year/:year/make/:make/model/:model', (req, res) =>{
    Car.find(
        {
            'year':req.params['year'],
            'make':req.params['make'],
            'model':req.params['model']
        },
        (err, cars) => {
            res.send(cars);
        }
    )
})

export default router;