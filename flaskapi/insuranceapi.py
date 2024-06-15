from flask import Flask,request,jsonify
import os
import joblib
from flask_cors import CORS
import pandas as pd


app=Flask(__name__)
CORS(app)

base_dir = os.path.abspath(os.path.dirname(__file__))
model_path = os.path.join(base_dir, 'insurance_model.pkl')
# Load the pre-trained model
model = joblib.load(model_path)

@app.route('/insurance',methods=['POST'])
def predict():
    data = request.json
    df=pd.DataFrame(data,index=[0])
    df = df.astype({
      "age":int,
      "sex":int,
      "bmi":float,
      "children":int,
      "smoker":int
    })
    prediction = model.predict(df)
    print(prediction[0])
    return jsonify({'output':prediction[0].item()})
if __name__ == '__main__':
    app.run(debug=True)