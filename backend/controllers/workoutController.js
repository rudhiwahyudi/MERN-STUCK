
const Workout = require ('../models/workoutModel')
const mongoose = require ('mongoose')

//get all workouts

const getWorkout = async (req, res) =>{
    const workout = await Workout.find({}).sort({createdAt: -1})

    res. status(200).json(workout)
}

//get a singel workouts

const getWorkout2 = async (req, res) =>{
    const {id} = req.params

    if(!mongoose.Types.ObjectId.isValid()){
        return res.status(404).json({error: "No Such Workout"})
    }

    const workout = await Workout.findById(id)

    if (!workout) {
        return res.status(400).json({error: "No Such Workout"})
    }

    res.status(200).json(workout)
}

//create new workouts

const createWorkout = async (req, res) => {
    const {title, load, reps} = req.body

    //add doc to db
    try{
        const workout = await Workout.create({title, load, reps})
        res.status(200).json(workout)
    } catch(error){
        res.status(400).json({error: error.message})
    }
}

//delete a workouts
const deleteWorkout = async (req ,res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such Workout"})
    }

    const workout = await Workout.findByIdAndDelete({_id: id})

    if (!workout) {
        return res.status(400).json({error: "No Such Workout"})
    }

    res.status(200).json(workout)

}


//update a workouts 

const updateWokrout = async (req,res) => {
    const {id} = req.params
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({error: "No Such Workout"})
    }

    const workout = await Workout.findByIdAndUpdate({_id: id}, {
        ...req.body
    })

    if (!workout) {
        return res.status(400).json({error: "No Such Workout"})
    }

    res.status(200).json(workout)

}


module.exports = {
    createWorkout,
    getWorkout,
    getWorkout2,
    deleteWorkout,
    updateWokrout
}

