function randomDate(start, end){
    function randomValueBetween(min, max) {
        return Math.random() * (max - min) + min;
    }
    var start = start || '01-01-1970'
    var end = end || new Date().toLocaleDateString()
    start = new Date(start).getTime()
    end = new Date(end).getTime()
    if( start>end){
        var newDate = new Date(randomValueBetween(end,start)).toISOString().slice(0, 10);
        return newDate;
    } else{
        var newDate = new Date(randomValueBetween(start, end)).toISOString().slice(0, 10);
        return newDate;
    }
};