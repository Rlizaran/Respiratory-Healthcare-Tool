function myHandler(){
    var ZIP_CODE = document.getElementById("ZipCode").value;
    var dates = loop();

    var aqilist = [];

    for (let i=0; i<dates.length; i++){
        var DATE = dates[i]
        url = `https://www.airnowapi.org/aq/observation/zipCode/historical/?format=application/json&zipCode=${ZIP_CODE}&date=${DATE}T00-0000&API_KEY=6B506C96-231C-4375-B929-676EFE4F7514`;
        d3.json(url).then(features => {
            var aqi = features[0].AQI; 
            aqilist.push(aqi);
        });
    };

    var aqiMax = maxValue(aqilist);
    var aqiMin = minValue(aqilist);
    var aqiAverage = calculateAverage(aqilist);

    console.log(AirPollution(aqiAverage));
};

function loop(){
    const dates = [];
    for (let i=0; i<10; i++){
        var date = randomDate("2012/01/01",);
        dates.push(date);
    }
    return dates;
}

function AirPollution (aqi){
    if (aqi < 42){
        return [1, "Good" ,'#00FF00'];
    }
    else if (aqi <84){
        return [2, 'Moderate', '#66CC00'];
    }
    else if (aqi <126){
        return [3, 'Unhealthy for Sensitive Groups', "#FF8000"];
    }
    else if (aqi <168){
        return [4, 'Unhealthy', "#FF6666"];
    }
    else if (aqi <210){
        retun [5, 'Unhealthy', "#FF0000"];
    }
    else if (aqi <252){
        return [6, 'Very Unhealthy', "#B266FF"];
    }
    else if (aqi <294){
        return [7, 'Very Unhealthy', "#4C0099"];
    }
    else {
        return [8, 'Hazardous', "#660000"];
    }
};