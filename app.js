let city = document.getElementById('city');
let locations = document.getElementById('location');
let temp = document.getElementById('temp')
let wind = document.getElementById('wind')
let tempFeels = document.getElementById('tempFeels')
let humidOFcity = document.getElementById('humidity')
let weatherIcon = document.getElementById('weatherIcon')
// let newCity ="prague"
$(document).ready(function(){
    getWeatherByCitycity('moscow')
});

function getWeatherByCitycity(city){
    $.get(
        "https://api.openweathermap.org/data/2.5/weather",
        // "https://api.openweathermap.org/data/2.5/weather?id=524901&lang=ru&appid=",
        
            
         {   
        
            "q" : city,
            "appid" : "37edcf594a6e459972546a21bc7c2566"
        },
        // console.log("q"),
        
        function showData(data){
            console.log(data);
            console.log(data.main);
            let nameOFcity = data.name
            let tempOFcity =  (Math.round(data.main.temp - 273.15)) + ' °C'
            let humidOFcity = data.main.humidity + ' %'
            let windOFcity = data.wind.speed + ' м/с'
            let feellOFcity = (Math.round(data.main.feels_like - 273.15)) + ' °C'
            let Icon = "http://openweathermap.org/img/w/" + (data.weather[0].icon) + ".png"
            // let weatherIcon =  Icon 
            console.log(Icon)
            // console.log(data.weather[0].icon) 
            document.getElementById('city').innerHTML=nameOFcity;
            document.getElementById('temp').innerHTML=tempOFcity;
            document.getElementById('tempFeels').innerHTML=feellOFcity;
            document.getElementById('wind').innerHTML=windOFcity;
            document.getElementById('humidity').innerHTML=humidOFcity
            document.getElementById('weatherIcon').src= Icon
        },

        // function getDataMain(data.main){
        //     console.log(data.main)
        // },
        
        // function(getCity){
        //     document.getElementById('city')=(data.name)
        // }
    );
}

locations.addEventListener('click',changeLocation)
function changeLocation(){
        const city=prompt('Введите новый город')
        getWeatherByCitycity(city)
        console.log(city)
    }
// console.log(response.json)
console.log("ANANSA")
// function change_City(){

// }


// console.log(city)
// console.log(locations)
// alert(data.name)

//  function get_City(){

//     document.getElementById('city')=(data.name)
// }



// locations.onclick= function() {
//     console.log("KKK")
// };









