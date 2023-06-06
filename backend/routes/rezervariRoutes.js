const express = require('express');
const router = express.Router();
const atv1Controller = require('../controllers/atv1Controller');
const atv2Controller = require('../controllers/atv2Controller');
const atv3Controller = require('../controllers/atv3Controller');
const atv4Controller = require('../controllers/atv4Controller');
const bicicleta1Controller = require('../controllers/bicicleta1Controller');


router.get('/atv1', atv1Controller.getReservations);
router.post('/atv1', atv1Controller.createReservation);
router.put('/atv1/:id', atv1Controller.updateReservation);
router.delete('/atv1/:id', atv1Controller.deleteReservation);
router.get('/atv1/user/:email', atv1Controller.getUserReservations);


router.get('/atv2', atv2Controller.getReservations);
router.post('/atv2', atv2Controller.createReservation);
router.put('/atv2/:id', atv2Controller.updateReservation);
router.delete('/atv2/:id', atv2Controller.deleteReservation);
router.get('/atv2/user/:email', atv2Controller.getUserReservations);


router.get('/atv3', atv3Controller.getReservations);
router.post('/atv3', atv3Controller.createReservation);
router.put('/atv3/:id', atv3Controller.updateReservation);
router.delete('/atv3/:id', atv3Controller.deleteReservation);
router.get('/atv3/user/:email', atv3Controller.getUserReservations);


router.get('/atv4', atv4Controller.getReservations);
router.post('/atv4', atv4Controller.createReservation);
router.put('/atv4/:id', atv4Controller.updateReservation);
router.delete('/atv4/:id', atv4Controller.deleteReservation);
router.get('/atv4/user/:email', atv4Controller.getUserReservations);

router.get('/bicicleta1', bicicleta1Controller.getReservations);
router.post('/bicicleta1', bicicleta1Controller.createReservation);
router.put('/bicicleta1/:id', bicicleta1Controller.updateReservation);
router.delete('/bicicleta1/:id', bicicleta1Controller.deleteReservation);
router.get('/bicicleta1/user/:email', bicicleta1Controller.getUserReservations);

module.exports = router;
