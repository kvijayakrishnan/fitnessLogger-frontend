import React, { useEffect } from "react";
import './FitnessList.css';
import { NavLink } from "react-router-dom";
import { useState } from "react";
import axios from "axios";


const FitnessList =  () => {
    const [fitness, setFitness] = useState([]);

    useEffect(() =>{
        getAllFitness();
    },[]);




    const getAllFitness = async () =>{
        try{
         const response =  await axios.get('https://vijay-fitnessapp.onrender.com/fitness')
        setFitness(response.data);
        }catch(err){
            console.log("Err :", err);
        }
    };


    const handleDelete = async (fitID)=>{
        try{
            const response = await axios.delete(`https://vijay-fitnessapp.onrender.com/fitness/${fitID}`);
            if(response){
                getAllFitness();
            }
        }catch(err) {
            console.log("Error while delete")
        }
    }






    return(
        <div className="fitnessList">
            <h3>Fitness List</h3>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Name</th>
                        <th>email</th>
                        <th>Workout</th>
                        <th>Burned Calories</th>
                    </tr>
                </thead>
                <tbody>
                    {fitness.length > 0 && fitness.map((fitness, index) =>(
                           <tr key={index}>
                           <td>{fitness.date}</td>
                           <td>{fitness.name}</td>
                           <td>{fitness.email}</td>
                           <td>{fitness.workout}</td>
                           <td>{fitness.burnedcalories}</td>
                           <td>
                               <NavLink to={`/fitness/${fitness._id}/update`} className='btn btn-primary'>Edit</NavLink>
                               <button className='btn btn-danger' onClick={()=>handleDelete(fitness._id)}>Delete</button>
                           </td>
                       </tr>
                    ))}                  
                </tbody>
            </table>
        </div>
    )
}

// 2.41




export default FitnessList;


