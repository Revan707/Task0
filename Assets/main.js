const API_KEY="5a488be1a15e4c69b4a100540231805"

let searchCity="Baku"

function getWeather(searchCity){

    fetch(`https://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${searchCity}&aqi=no`)
    .then(x=>x.json())
    .then((x) => {
        if (x.status === 400) {
            console.log("Salam");
        }
        return renderWeather(x);
    })
}



const container =document.querySelector(".container")
const searchBar=document.querySelector(".search-bar")
const search=document.querySelector(".search")
console.log(searchBar);
searchBar.addEventListener("keyup",(e)=>{
    searchCity=e.target.value.trim()
})

search.addEventListener("click",()=>{
   getWeather(searchCity)


})

function renderWeather(weather){
    const name=weather.location.name
    const country=weather.location.country
    const localtime=weather.location.localtime
    const temperature=weather.current.temp_c
    const icon=weather.current.condition.icon
    const windSpeed=weather.current.wind_kph
    const humidity=weather.current.humidity
    const feelsLike=weather.current.feelslike_c
    const uvIndex=weather.current.uv

    if(container.childElementCount==9){
        container.innerHTML=""
    }

    const nameSpan=document.createElement("span")
    nameSpan.innerText=`Name: ${name}`

    const countrySpan=document.createElement("span")
    countrySpan.innerText=`Country: ${country}`

    const localTimeSpan=document.createElement("span")
    localTimeSpan.innerText=`Localtime: ${localtime.slice(10)}`

    const temperatureSpan=document.createElement("span")
    temperatureSpan.innerText=`Temp_c: ${temperature} °C`

    const _icon=document.createElement("img")
    _icon.className="myIcon"
    _icon.src="https:"+icon

    const windspeedSpan=document.createElement("span")
    windspeedSpan.innerText=`Wind_kph: ${windSpeed} km/h`

    const humiditySpan=document.createElement("span")
    humiditySpan.innerText=`Humidity: ${humidity} %`

    const feelslikeSpan=document.createElement("span")
    feelslikeSpan.innerText=`Feelslike: ${feelsLike} °C`

    const uvindexSpan=document.createElement("span")
    uvindexSpan.innerText=`Uv: ${uvIndex}`


    container.appendChild(nameSpan)
    container.appendChild(countrySpan)
    container.appendChild(localTimeSpan)
    container.appendChild(temperatureSpan)
    container.appendChild(_icon)
    container.appendChild(windspeedSpan)
    container.appendChild(humiditySpan)
    container.appendChild(feelslikeSpan)
    container.appendChild(uvindexSpan)

}

getWeather(searchCity)

