const express = require('express')
const {createWorkout, 
        getWorkout, 
        getWorkout2,
        deleteWorkout,
        updateWokrout} = require ('../controllers/workoutController')

const router = express.Router()



// GET all workouts
router.get('/', getWorkout)

// GET all single workouts
router.get('/:id', getWorkout2)

//POST new workout
router.post('/', createWorkout) 

//DELET a workout
router.delete('/:id', deleteWorkout)

//UPDATE a workout
router.patch('/:id', updateWokrout)


    
module.exports = router