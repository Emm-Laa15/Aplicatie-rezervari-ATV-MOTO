const path = require('path')
const express = require('express')
const cors = require('cors');
require('colors')
require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT
const generateSitemap = require('./sitemap')

generateSitemap()
connectDB()

const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// Folosește middleware-ul CORS înainte de toate rutele
app.use(cors({
  origin: 'http://localhost:3000',
  methods: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/reservations', require('./routes/reservationRoutes'))
app.use('/rezervari', require('./routes/rezervariRoutes'))

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../frontend/build')))

  app.get('*', (_, res) => {
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
  })
} else {
  app.get('/', (_, res) => {
    res.status(200).json({ message: 'Platforma Rezervari Initializata' })
  })

}

app.use(errorHandler)

app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
