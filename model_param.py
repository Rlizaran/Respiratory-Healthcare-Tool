import joblib
import numpy as np


# defing model to predict based on our saved model


def model_load_cancer(variables):
    final_variables = [variables]
    # loading model
    trained_model = joblib.load('model_cancer.pkl')
    prediction = trained_model.predict(final_variables)
    if prediction == [0]:
        return "Based on our trained model it looks like 'You have very low chance of having cancer'"
    elif prediction == [1]:
        return "Based on our trained model it looks like 'You have medium chance of having cancer'"
    else:
        return "Based on our trained model it looks like 'You have very high chance of having cancer'"


def model_load_asthma(variables):
    # using standardscaler for transformation
    scaler = joblib.load('scaler_asthma.pkl')
    X_scaler = scaler.transform([variables])

    test_data = scaler.transform(X_scaler)
    trained_model = joblib.load('model_asthma.pkl')
    prediction = trained_model.predict(test_data)
    return f'Your chance of hospitalization is {prediction}'
