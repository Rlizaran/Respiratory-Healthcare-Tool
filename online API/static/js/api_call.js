var ZIP_CODE = "91103";
var DATE = "2012-11-20";

url = `https://www.airnowapi.org/aq/observation/zipCode/historical/?format=application/json&zipCode=${ZIP_CODE}&date=${DATE}T00-0000&API_KEY=6B506C96-231C-4375-B929-676EFE4F7514`;

d3.json(url).then(features => {
    console.log(features)
});