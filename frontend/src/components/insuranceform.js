import React from "react";
import { useState } from "react";
import axios from "axios";

const Insurance= ()=>{
    const[formData,setformData]=useState({
        'age':'',
        'sex':'',
        'bmi':'',
        'children':'',
        'smoker':'',
    });

const [prediction,setprediction]=useState(null)
const handleChange = (e)=>{
    
     setformData({...formData,[e.target.name]:e.target.value})
}
const handlesubmit = async (e)=>{
    e.preventDefault()
   try {
    //  const response = await axios.post('http://localhost:5000/predict',formData);
    const response = await axios.post('http://localhost:5000/insurance', formData, {
        headers: {
            'Content-Type': 'application/json'
        }
    })
     setprediction(response.data.output)
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
                <h2 style={headerStyle}>INSURANCE COST Prediction Form</h2>
                <input type="number" name="age" onChange={handleChange} value={formData.age} style={inputStyle} placeholder="enter your age" />
                <input type="number" name="sex" onChange={handleChange} value={formData.sex} style={inputStyle} placeholder="1 for male, 0 for female" />
                <input type="number" name="bmi" onChange={handleChange} value={formData.bmi} style={inputStyle} placeholder="BMI" />
                <input type="number" name="children" onChange={handleChange} value={formData.children} style={inputStyle} placeholder="Enter no of children"/>
                <input type="number" name="smoker" onChange={handleChange} value={formData.smoker} style={inputStyle} placeholder="press 1 if you smoke and 0 if you are not a smoker" />
                <button type="submit" style={buttonStyle}>PREDICT</button>
                {prediction !== null && <div style={predictionStyle}>TOTAL COST {prediction}</div>}
            </form>
            
    
    </div>
    
)};
export default Insurance;
// data types of the columns in your input DataFrame are not as expected by the XGBoost model. Specifically, the columns are being interpreted as objects (strings) instead of numerical values.

// This usually happens because the input data is coming from a JSON payload, and when it's converted to a DataFrame, the types might not be correctly inferred.