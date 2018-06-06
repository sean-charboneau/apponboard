var express = require('express');
var router = express.Router();


const ZOO_ID = 1; // Hard coded just for demo purposes
var zooController = require('../lib/controllers/zoo');

router.get('/', (req, res) => {
  res.render('home', {title: 'Zoo Management Page'});
});

router.get('/animalList', (req, res) => {
    zooController.getAnimalList(ZOO_ID, function(err, results) {
        if(err) {
            return res.status(400).json({error: err});
        }
        return res.status(200).json(results);
    });
});

router.get('/staffList', (req, res) => {
    zooController.getStaffList(ZOO_ID, function(err, results) {
        if(err) {
            return res.status(400).json({error: err});
        }
        return res.status(200).json(results);
    });
});

router.get('/zooInfo', (req, res) => {
    zooController.getZooInfo(ZOO_ID, function(err, results) {
        if(err) {
            return res.status(400).json({error: err});
        }
        return res.status(200).json(results);
    });
});

router.get('/schedule', (req, res) => {
    zooController.getSchedule(ZOO_ID, function(err, results) {
        if(err) {
            return res.status(400).json({error: err});
        }
        return res.status(200).json(results);
    });
});

router.post('/addAnimal', (req, res) => {
    var animalId = req.body.name;
    zooController.addAnimal(ZOO_ID, animalId, function(err, results) {
        if(err) {
            return res.status(400).json({error: err});
        }
        return res.status(200).json(results);
    });
});

router.post('/removeAnimal', (req, res) => {
    var animalId = req.body.id;
    zooController.removeAnimal(animalId, ZOO_ID, function(err, results) {
        if(err) {
            return res.status(400).json({error: err});
        }
        return res.status(200).json(results);
    });
});

module.exports = router;