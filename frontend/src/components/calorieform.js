import React from "react";
import { useState } from "react";
import axios from "axios";

const Calorieform = ()=>{
    const[formData,setformData]=useState({
        'Gender':'',
        'Age':'',
        'Height':'',
        'Weight':'',
        'Duration':'',
        'Heart_Rate':'',
        'Body_Temp':''
    });

const [prediction,setprediction]=useState(null)
const handleChange = (e)=>{
    
     setformData({...formData,[e.target.name]:e.target.value})
}
const handlesubmit = async (e)=>{
    e.preventDefault()
   try {
    //  const response = await axios.post('http://localhost:5000/predict',formData);
    const response = await axios.post('http://localhost:5000/predict', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
     setprediction(response.data.predicted_calories)
   } catch (error) {
       console.log(error)
   }
}

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '20px',
        backgroundColor: '#f7f7f7',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        maxWidth: '400px',
        margin: 'auto',
        fontFamily: 'Arial, sans-serif'
    };

    const inputStyle = {
        width: '100%',
        padding: '10px',
        margin: '10px 0',
        borderRadius: '5px',
        border: '1px solid #ccc',
        fontSize: '16px'
    };

    const buttonStyle = {
        padding: '10px 20px',
        margin: '10px 0',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: '#4CAF50',
        color: 'white',
        fontSize: '16px',
        cursor: 'pointer'
    };

    const headerStyle = {
        marginBottom: '20px',
        color: '#333'
    };

    const predictionStyle = {
        marginTop: '20px',
        fontSize: '18px',
        color: '#4CAF50'
    };

    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', backgroundColor: '#e9ecef' }}>
            <form onSubmit={handlesubmit} style={formStyle}>
                <h2 style={headerStyle}>Calorie Prediction Form</h2>
                <input type="number" name="Gender" onChange={handleChange} value={formData.Gender} style={inputStyle} placeholder="1 for male, 0 for female" />
                <input type="number" name="Age" onChange={handleChange} value={formData.Age} style={inputStyle} placeholder="Enter your age" />
                <input type="number" name="Height" onChange={handleChange} value={formData.Height} style={inputStyle} placeholder="Enter your height in cm" />
                <input type="number" name="Weight" onChange={handleChange} value={formData.Weight} style={inputStyle} placeholder="Enter your weight in kg" />
                <input type="number" name="Duration" onChange={handleChange} value={formData.Duration} style={inputStyle} placeholder="Enter total time you exercised" />
                <input type="number" name="Heart_Rate" onChange={handleChange} value={formData.Heart_Rate} style={inputStyle} placeholder="Enter your heart rate" />
                <input type="number" name="Body_Temp" onChange={handleChange} value={formData.Body_Temp} style={inputStyle} placeholder="Enter your average body temperature during the exercise" />
                <button type="submit" style={buttonStyle}>PREDICT</button>
                {prediction !== null && <div style={predictionStyle}>Predicted Calories: {prediction}</div>}
            </form>
            
    
    </div>
    
)};
export default Calorieform;
// data types of the columns in your input DataFrame are not as expected by the XGBoost model. Specifically, the columns are being interpreted as objects (strings) instead of numerical values.

// This usually happens because the input data is coming from a JSON payload, and when it's converted to a DataFrame, the types might not be correctly inferred.