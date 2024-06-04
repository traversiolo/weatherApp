const apiKey="00f676466b78b536b32174af666d7d2b";
const apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=`;

var searchBox=document.querySelector(".search input");
var searchBtn=document.querySelector(".search button");
var weatherIcon=document.querySelector(".weather img");
async function checkWeather(city){
    const response= await fetch(apiUrl+`${city}&appid=` +apiKey+"&units=metric");
    var data=await response.json();

    if (response.status==404) {
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
        document.querySelector(".card").style.padding="40px 30px 10px 30px";
    }else{
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+" °C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+" %";
    document.querySelector(".wind").innerHTML=Math.round(data.wind.speed)+" km/h";

    console.log(data);
    if (data.weather[0].main==="Rain") {
        weatherIcon.src="images/rain.png"
    }else if(data.weather[0].main==="Clear"){
        weatherIcon.src="images/clear.png"
    }else if(data.weather[0].main==="Clouds"){
        weatherIcon.src="images/clouds.png"
    }else if(data.weather[0].main==="Drizzle"){
        weatherIcon.src="images/drizzle.png"
    }else if(data.weather[0].main==="Mist"){
        weatherIcon.src="images/mist.png"
    }else if(data.weather[0].main==="Snow"){
        weatherIcon.src="images/snow.png"
    }

    document.querySelector(".error").style.display="none"

    document.querySelector(".weather").style.display="block"
    }
    
}

searchBtn.addEventListener("click",()=>{
    checkWeather(searchBox.value);
    
})
