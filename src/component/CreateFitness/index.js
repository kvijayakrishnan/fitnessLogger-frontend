import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CreateFitness.css'

const CreateFitness = () => {

    const navigate = useNavigate();
    const [fitnessDetails, setFitnessDetails] = useState({
        date:'',
        name:'',
        email:'',
        workout:'',
        burnedcalories:'',

    });






    const handleSubmit = async (event) => {
        // form submission will be done here
        event.preventDefault();
        const newFitness = {...fitnessDetails};
        try{
            const response = await axios.post('https://vijay-fitnessapp.onrender.com/fitness', newFitness)
            if(response){
                setFitnessDetails({
                    date:'',
                    name:'',
                    email:'',
                    workout:'',
                    burnedcalories:'',
                });
                navigate('/');
            }
        
        }catch(err){
            console.log('error while adding a new fitness log')
        }

    }

    const handleForm = (value) =>{
        return setFitnessDetails(fitness =>{
            return{...fitness, ...value}
        })
    }





    return(
        <div>
            <h3>Create a Fitness Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Date</label>
                    <input className="form-control" id="name" type="date" value={fitnessDetails.date} onChange={(e) => handleForm({date:e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" id="name" type="text" value={fitnessDetails.name} onChange={(e) => handleForm({name:e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" id="email" type="text" value={fitnessDetails.email} onChange={(e) => handleForm({email:e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Workout Type</label>
                    <input className="form-control" id="workout" type="text" value={fitnessDetails.workout} onChange={(e) => handleForm({workout:e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Burned Calories</label>
                    <input className="form-control" id="burnedcalories" type="text" value={fitnessDetails.burnedcalories} onChange={(e) => handleForm({burnedcalories:e.target.value})} />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" value="Add Fitness Log" type="submit" />
                </div>
            </form>
        </div>
    )
}






export default CreateFitness;


