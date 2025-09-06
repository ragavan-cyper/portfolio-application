let getweatherdata=async (city) => {
    let weatherApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=c029366f72caac3a514862dc2901fd9b&units=metric`;
    let weatherkey= await fetch(weatherApi)
    let response= await weatherkey.json()
    return response

    
}

let weatherbtn=document.getElementById("weatherbtn")
weatherbtn.addEventListener("click",async () => {


    let cityInput=document.getElementById("cityInput").value
    getweatherdata(cityInput).then((response)=>{
          console.log(response)
        document.getElementById("cityName").innerHTML = `
            <h2>${response.name}</h2>
            <p >🌡 Temp: ${response.main.temp} °C</p>
            <p>☁ Weather: ${response.weather[0].description}</p>
            <p>💧 Humidity: ${response.main.humidity}%</p>
        `;
    }).catch((reject)=>{
         document.getElementById("cityName").innerHTML = `
            <h2>${reject}</h2>`
    })
    
})


