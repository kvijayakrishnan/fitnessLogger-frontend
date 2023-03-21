import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import './UpdateFitness.css'

const UpdateFitness = () => {


    const params = useParams();
    const navigate = useNavigate();

    const [fitnessDetails, setFitnessDetails] = useState({
        date:'',
        name:'',
        email:'',
        workout:'',
        burnedcalories:'',
    })

    useEffect(()=>{
        const fitID = params.fitID.toString();

        axios.get(`https://vijay-fitnessapp.onrender.com/fitness/${fitID}`).then((response) =>{
            setFitnessDetails(response.data);
            console.log('Response :', response.data);
        }).catch(err => {
            console.log('Error:', err)
        })
    },[params.fitID])


    useEffect(()=>{
        // fitnessDetails
    },[])



        const handleSubmit = async(e) => {
            // form submission will be done here
            e.preventDefault();
            console.log('Fitness Details: ', fitnessDetails);
            try{
                const fitID = params.fitID.toString();
                const response = await axios.put(`https://vijay-fitnessapp.onrender.com/fitness/${fitID}`, fitnessDetails);
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
                console.log('Error while update fitness log: ', err)
            }
        }

        const handleChange = (value) => {
            return setFitnessDetails((fitness) => {
                return{...fitness, ...value}
            })
        }





    return(
        <div>
            <h3 className='fitnessList'>Update a Fitness Log</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Date</label>
                    <input className="form-control" id="name" type="date" value={fitnessDetails.date} onChange={(e) => handleChange({date: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Name</label>
                    <input className="form-control" id="name" type="text" value={fitnessDetails.name} onChange={(e) => handleChange({name: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input className="form-control" id="email" type="text" value={fitnessDetails.email} onChange={(e) => handleChange({email: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Workout Type</label>
                    <input className="form-control" id="workout" type="text" value={fitnessDetails.workout} onChange={(e) => handleChange({workout: e.target.value})} />
                </div>
                <div className="form-group">
                    <label>Burned Calories</label>
                    <input className="form-control" id="burnedcalories" type="text" value={fitnessDetails.burnedcalories} onChange={(e) => handleChange({burnedcalories: e.target.value})} />
                </div>
                <div className="form-group">
                    <input className="btn btn-primary" value="Add Fitness Log" type="submit" />
                </div>
            </form>
        </div>
    
    )
}






export default UpdateFitness;


