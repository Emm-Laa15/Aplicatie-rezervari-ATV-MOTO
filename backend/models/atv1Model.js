const mongoose = require('mongoose')
const { v4: uuidv4 } = require('uuid')

const reservationSchema = new mongoose.Schema({
  
  atv1Model: {
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
  id: {
    type: String,
    default: uuidv4,
  }
})

const Reservation = mongoose.model('AB-21-BRS', reservationSchema)

module.exports = Reservation
