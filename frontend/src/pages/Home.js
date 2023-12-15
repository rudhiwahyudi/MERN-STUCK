import { useEffect, useState } from "react"


//Components

import WorkoutDetails from "../components/WorkoutDetails"
import WorkoutForm from "../components/WorkoutForm"


const Home = () => {

    const [workouts, setWorkouts] = useState(null)

    useEffect(() => {
        const fetchWorkout = async () => {
            const respon = await fetch('/api/workouts')
            const json = await respon.json()

            if (respon.ok){
                setWorkouts(json)
            }
        }

        fetchWorkout()
    }, [])

    return(
        <div>
           <div className="workouts">
                {workouts && workouts.map((workout) => (
                    <WorkoutDetails workout={workout} key={workout._id} />
                ))}
           </div>
           <WorkoutForm/>
        </div>
    )
}


export default Home 