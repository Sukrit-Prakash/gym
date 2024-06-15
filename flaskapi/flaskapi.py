from flask import Flask, request, jsonify
import joblib
import pandas as pd
import os
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

base_dir = os.path.abspath(os.path.dirname(__file__))
model_path = os.path.join(base_dir, 'model.pkl')
# Load the pre-trained model
model = joblib.load(model_path)

@app.route('/predict', methods=['POST'])
def predict():
    data = request.json
    # Convert the received JSON data to a DataFrame
    df = pd.DataFrame(data, index=[0])
    df = df.astype({
        "Gender": int,
        "Age": int,
        "Height": float,
        "Weight": float,
        "Duration": float,
        "Heart_Rate": float,
        "Body_Temp": float
    })
    # Make prediction
    prediction = model.predict(df)
    print(prediction[0])
    # Return the prediction as a JSON response
    # Convert prediction to a Python float
    return jsonify({'predicted_calories': prediction[0].item()})

if __name__ == '__main__':
    app.run(debug=True)
