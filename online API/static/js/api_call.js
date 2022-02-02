function myHandler(){
    var ZIP_CODE = document.getElementById("ZipCode").value;
    var dates = loop();
    const aqilist = []
    for (let i=0; i<10; i++){
        var DATE = dates[i]
        url = `https://www.airnowapi.org/aq/observation/zipCode/historical/?format=application/json&zipCode=${ZIP_CODE}&date=${DATE}T00-0000&API_KEY=6B506C96-231C-4375-B929-676EFE4F7514`;
        d3.json(url).then(features => {
            var aqi = parseInt(features[0].AQI);
            aqilist.push(aqi);
        });
    }
    var numbers = calculateAQI(aqilist);
    console.log(numbers)
    var aqiMax = numbers[0]
    var aqiMin = numbers[1]
    var aqiAverage = numbers[2]
    console.log(aqiMax)
    console.log(aqiMin)
    console.log(aqiAverage)
    console.log(AirPollution(aqiAverage))
};

function loop(){
    const dates = [];
    for (let i=0; i<10; i++){
        var date = randomDate("2018/01/01",);
        dates.push(date);
    }
    return dates;
}

function calculateAQI(aqilist){
    console.log(aqilist)
    var max = Math.max(aqilist)
    var min = Math.min(aqilist)
    var aqiAverage = calculateAverage(aqilist)
    return [max, min, aqiAverage]
}

function calculateAverage(array){
    var total = 0;
    var count = 0;

    array.forEach(function(item, index){
        total += item;
        count++;
        
    });

    return total / count;
}


function AirPollution (aqiAverage){
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