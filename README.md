# Respiratory Healthcare Tool
The website is deployed to Heroku at: https://respiratory-healthcare-tool.herokuapp.com/

In this project, we built a machine learning model to predicts a patient's risk of lung cancer and asthma emergency department visits using air quality data.

## Background
Created a web application for physicians to predict a patient's risk of lung cancer, given the air quality in their region, and other risk factors (i.e., smoking, gender, age, diet). If the patient suffers from asthma, physicians can also predict their rate of emergency department visits for asthma attacks given the air quality of their region. 


## Resources
### Asthma Data
* California Department of Public Health.
* [Open Data. Asthma ED Visit Rates](https://data.chhs.ca.gov/dataset/asthma-ed-visit-rates-lghc-indicator-07)
* [US EPA Air Data. Annually Summary Data](https://aqs.epa.gov/aqsweb/airdata/download_files.html#Annual)

### Cancer Data
* Ahmad, Ahmad S., and Ali M. Mayya. “A new tool to predict lung cancer based on risk factors.” Heliyon 6.2 (2020): e03402
* Air Now API for air quality index: https://docs.airnowapi.org/
* Historical air quality index data: https://aqs.epa.gov/aqsweb/airdata/download_files.html#AQI


## Preprocessing: 
### Scaling the data
Used `StandardScaler` to scale the training and testing sets. 
### Converting categorical data to numeric
Created a training set from the 2019 loans using `pd.get_dummies()` to convert the categorical data to numeric columns. Similarly, create a testing set from the 2020 loans, also using `pd.get_dummies()`

## Model Building
### Cancer Model
Created different classification models to predict patient’s risk of developing lung cancer. Different models are:
* Decision Tree Classifier
* Random Forest Classifier
* Extremely Random Trees
* Boosting- AdaBoostClassifier

### Asthma Model
Created different Regression models to predict patient’s emergency department visit rate for severe Asthma attacks. Different models are:
* Linear Regression
* Support Vector Machine
* Decision Tree 
* Random Forest 
* Extremely Random Trees
* Boosting- AdaBoostRegressor

## Tuning hyperparameters for all model
* Grid Search CV
* Randomized Search CV

## Trying to improve score by selecting important features 
Using SelectFromModel to fit the Decision Tree model and get the important features only to fit all the model described above.


## Comparing real and predicted value using sample test set
## Cancer Model
![Images/landingResize.png](Images/comp1.png)

## Asthma Model
![Images/landingResize.png](Images/comp2.png)

## Production
Used Flask templating to create a website to predict risk of lung cancer and asthma emergency department visits using air quality data. The saved model was used for the prediction.

Healthcare tool is designed to assess a patient’s respiratory health based on their local air quality. To begin patient's zip code need to enter. The Air Quality Index category (i.e., Good, Moderate, Unhealthy) for the patient’s region will populate the display.

The “Model Prediction for Cancer” model is used to predict a patient's risk of developing lung cancer (Low, Medium, High). 

The “Model Prediction for Asthma” model is used to predict the patient’s emergency department visit rate for severe asthma attacks. 

The website is deployed to Heroku at: https://respiratory-healthcare-tool.herokuapp.com/

![Images6.png](Images/heroku.png)

