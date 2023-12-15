
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const workoutRoutes = require ('./routes/workout')

// express app
const App = express()

// middelware
App.use(express.json())

App.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

// routes
App.use('/api/workouts',workoutRoutes)

//connection db
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // listen for request
        App.listen(process.env.PORT, () => {
            console.log("connenct db & port running in", process.env.PORT)
        })
    })
    .catch((error) => {
        console.log(error)
    })
