function fetchcityid(cityid,callback){
    setTimeout(()=>{
        callback(cityid);
    },1000)
}
function fetchcityweather(cityname,callback){
    setTimeout(()=>{
        console.log('fetch cityname:$(cityname)');
        const weather={cityname:'abc',temperature:28,condition:'sunny'};
        callback(weather);
    },1000);
}
function displayweather(weather){
    console.log(`cityname  ${weather.city}:`);
    console.log(`Temperature: ${weather.temperature}°C`);
    console.log(`Condition: ${weather.condition}`);
}
fetchcityid(10, (cityname) => {
    fetchcityweather(cityname, displayweather);
});