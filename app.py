from flask import Flask, request, render_template, redirect, jsonify
import json
import os
from model_param import model_load_cancer, model_load_asthma
from bson import json_util
from pymongo import MongoClient
from flask_pymongo import PyMongo
# Create an instance of Flask
app = Flask(__name__)

# Use PyMongo to establish Mongo connection
client = MongoClient("mongodb://localhost:27017")
db = client['air-quality']

# os.environ.get('MONGO_URI', '')
# app.config["MONGO_URI"] =
#app.config['MONG_DBNAME'] = 'e-commerce'
#mongo = PyMongo(app)

# creating collection (add mongo)
cancer = db['cancer']
asthma = db['asthma']


@app.route('/')
def home():
    # Return the template
    return render_template('index.html')


@app.route('/index.html')
def index():
    # Return the template
    return render_template('index.html')


@app.route('/dashboard.html')
def figure():
    # Store the entire collection as a list

    # Return the template
    return render_template('dashboard.html')


@app.route('/contact.html')
def contact():
    # Return the template
    return render_template('contact.html')


@app.route('/data.html')
def data():
    # Return the template
    return render_template('data.html')


@app.route('/send/asthma', methods=["GET", "POST"])
def predic_asthma():
    if request.method == "POST":

        Age_Group = request.form.get('Age_Group')
        air_quality_max = request.form.get('MaxAQI')
        air_quality_min = request.form.get('MinAQI')
        air_quality_average = request.form.get('MeanAQI')
        variables = [Age_Group,
                     air_quality_max,
                     air_quality_min,
                     air_quality_average]
        predict = model_load_asthma(variables)

        return render_template("index.html", pred=variables, prediction=predict)
    else:
        return render_template("index.html")


@app.route('/send/cancer', methods=["GET", "POST"])
def predic_cancer():
    if request.method == "POST":

        Coughing = request.form.get('Coughing')
        Obesity = request.form.get("Obesity")
        Smoker = request.form.get('Smoker')
        Fatigue = request.form.get('Fatigue')
        Alchol_use = request.form.get('Alchol_use')
        Balanced_diet = request.form.get('ProductRelated_Duration')
        Air_pollution = request.form.get('Air_pollution')
        variables = [Coughing, Obesity,
                     Smoker, Fatigue, Alchol_use,
                     Balanced_diet, Air_pollution]
        predict = model_load_cancer(variables)

        return render_template("index.html", pred=variables, prediction=predict)
    else:
        return render_template("index.html")


@ app.route("/data/cancer")
def get_data():
    all_data_list = list(cancer.find())
    return json.dumps(all_data_list, default=json_util.default)


@ app.route("/data/asthma")
def get_data1():
    all_data_list = list(asthma.find())
    return json.dumps(all_data_list, default=json_util.default)


if __name__ == "__main__":
    app.run(debug=True)
