const weatherAPP = {
    apiKey: "dd6d1bdf4aaa1fd12a26617aca201d43",

    fetchApi: function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="
        +city
        +"&units=metric&appid="
        +this.apiKey)
        .then((response) => response.json())
        .then((data) => this.currentWeather(data));
    },

    currentWeather: function(data){
        const city = data.name;
        const temp = data.main.temp;
        const cloud = data.clouds.all;
        const pressure = data.main.pressure;
        const wind_speed = data.wind.speed;
        const humidity = data.main.humidity;
        document.getElementById("city-span").innerHTML = city;
        document.getElementById("temp-span").innerHTML = temp;
        document.getElementById("cloudiness-span").innerHTML = cloud;
        document.getElementById("pressure-span").innerHTML = pressure;
        document.getElementById("wind-span").innerHTML = wind_speed;
        document.getElementById("humidity-span").innerHTML = humidity;
        
        console.log(data);
    }

    
}

window.addEventListener('load', () =>{
    weatherAPP.fetchApi("warsaw");

    const search_button = document.getElementById("search-button");
        search_button.addEventListener('click', () =>{
            const city = document.getElementById("search-input").value;
                if(city == "" || city.trim().length === 0){
                    alert("Search input is empty")
                }
                else{
                    weatherAPP.fetchApi(city);
                    document.getElementById("search-input").value = "";
                }
            
        }
    )
})

