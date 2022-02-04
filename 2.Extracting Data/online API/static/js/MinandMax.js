function maxValue(aqilist){
    var length = aqilist.length;
    max = aqilist[length-1]
    while(length--){
        if (aqilist[length] > max){
            max = aqilist[length]
        }
    }
    return max
}

function minValue(aqilist){
    var length = aqilist.length;
    minimum = aqilist[length-1]
    while (length--){
        if(aqilist[length] < minimum){
            minimum = aqilist[length]
        }
    }
    return minimum;
};

function calculateAverage(array){
    var total = 0;
    var count = 0;

    array.forEach(function(item, index){
        total += item;
        count++;
        
    });

    return total / count;
}

