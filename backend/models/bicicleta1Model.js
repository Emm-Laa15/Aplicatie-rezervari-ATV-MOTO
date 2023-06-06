const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const reservationSchema = new mongoose.Schema({
  
  bicicleta1Model: {
    type: String,
    required: true,
  },
  customerName: {
    type: String,
    required: false,
  },
  email: {
    type: String,
    required: true,
  },
  startTime: {
    type: Date,
    required: true,
  },
  endTime: {
    type: Date,
    required: true,
  },
  sumaRon: {
    type: Number,
    required: false,
  },
})

const Reservation = mongoose.model('XR-6-4', reservationSchema)

module.exports = Reservation
