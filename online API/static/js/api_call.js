const aqi_data =[];
async function myHandler() {

    var ZIP_CODE = document.getElementById("ZipCode").value;
  
    var dates = loop();

    const date_list_url =[]
    for (let i=0; i<10; i++){
        var DATE = dates[i]
        url = `https://www.airnowapi.org/aq/observation/zipCode/historical/?format=application/json&zipCode=${ZIP_CODE}&date=${DATE}T00-0000&API_KEY=6B506C96-231C-4375-B929-676EFE4F7514`;
        date_list_url.push(url)
    }

    console.log(date_list_url)
    
    const r1 = await fetch(date_list_url[0])
    const r2 = await fetch(date_list_url[1])
    const r3 = await fetch(date_list_url[2])
    const r4 = await fetch(date_list_url[3])
    const r5 = await fetch(date_list_url[4])
    const r6 = await fetch(date_list_url[5])
    const r7 = await fetch(date_list_url[6])
    const r8 = await fetch(date_list_url[7])
    const r9 = await fetch(date_list_url[8])
    const r10 = await fetch(date_list_url[9])

    //console.log(date_list_url)
    let j1 = await r1.json();
    let j2 = await r2.json();
    let j3 = await r3.json();
    let j4 = await r4.json();
    let j5 = await r5.json();
    let j6 = await r6.json();
    let j7 = await r7.json();
    let j8 = await r8.json();
    let j9 = await r9.json();
    let j10 = await r10.json();

    const json_list = [j1,j2,j3,j4,j5,j6,j7,j8,j9,j10];
    for (let i=0; i < json_list.length; i++){
            aqi_data.push(json_list[i][0].AQI);
    }

    calculateAQI(aqi_data);

}


function loop(){
    const dates = [];
    for (let i=0; i<10; i++){
        var date = randomDate("2018/01/01",);
        dates.push(date);
    }
    return dates;
}


function calculateAQI(aqi_data){
    console.log(aqi_data)
    var max = Math.max(...aqi_data)
    var min = Math.min(...aqi_data)
    var aqiAverage = calculateAverage(aqi_data)

    console.log(AirPollution(aqiAverage))

    console.log(max);
    console.log(min);
    console.log(aqiAverage);
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