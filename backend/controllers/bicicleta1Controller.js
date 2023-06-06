const Bicicleta1 = require('../models/bicicleta1Model')


// Obține toate rezervările
exports.getReservations = async (req, res, next) => {
    try {
        const reservations = await Bicicleta1.find({});
        res.status(200).json(reservations);
    } catch (error) {
        next(error);
    }
}

// Creează o nouă rezervare
exports.createReservation = async (req, res, next) => {
    const newBicicleta1 = new Bicicleta1({
        bicicleta1Model: req.body.bicicleta1Model,
        customerName: req.body.customerName,
        email: req.body.email,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        sumaRon: req.body.sumaRon,
    });

    try { 
        console.log(newBicicleta1);
        const savedReservation = await newBicicleta1.save();

        res.status(201).json(savedReservation);
    } catch (error) {
        next(error);
    }
}

// Obține toate rezervările unui utilizator
exports.getUserReservations = async (req, res, next) => {
    try {
        const userReservations = await Bicicleta1.find({ email: req.params.email});
        res.status(200).json(userReservations);
    } catch (error) {
        next(error);
    }
}


// Actualizează o rezervare existentă
exports.updateReservation = async (req, res, next) => {
    const reservationUpdate = {
        bicicleta1Model: req.body.bicicleta1Model,
        customerName: req.body.customerName,
        numarClient: req.body.numarClient,
        telefon: req.body.telefon,
        startTime: req.body.startTime,
        endTime: req.body.endTime,
        sumaRon: req.body.sumaRon,
    };

    try {
        const updatedReservation = await Bicicleta1.findByIdAndUpdate(req.params.id, reservationUpdate, { new: true });
        res.status(200).json(updatedReservation);
    } catch (error) {
        next(error);
    }
}

// Șterge o rezervare
exports.deleteReservation = async (req, res, next) => {
    try {
        await Bicicleta1.findByIdAndRemove(req.params.id);
        res.status(200).json({ message: 'Rezervarea a fost ștearsă cu succes' });
    } catch (error) {
        next(error);
    }
}
