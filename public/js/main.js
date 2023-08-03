//main logic 
const cityName= document.getElementById('city');
const submitbtn = document.getElementById('submitbtn');
const City = document.getElementById('cityName')
const country = document.getElementById('countryName')
const temp = document.getElementById('temp')
const humidity = document.getElementById('humidity')
const weather = document.getElementById('weather')
const getdata = async(e)=>{
    e.preventDefault();
    //alert(cityName.value);
    if(cityName.value === ""){
             alert("please enter city name before searching");
    }
    else{
        try{const url=`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&units=metric&appid=6cdf6f7519ce4ecef9bd611edcc9ef82`;
        const response = await fetch(url);
        const data = await response.json();
        const arr = [data]
        //  console.log(data);
        City.innerHTML=`<h3 class="card-title" id="cityName">City Name : ${arr[0].name}</h3>`
        country.innerHTML= `<h6 class="card-subtitle mb-2 text-muted" id="countryName">Country: ${arr[0].sys.country}</h6>`
        temp.innerHTML=`<h5 class="card-text" id="temp">Temperature: ${arr[0].main.temp} <sup>0</sup> C   </h5>`
        humidity.innerHTML=`<h5 class="card-text" id="humidity">Humidity: ${arr[0].main.humidity}</h5>`
        weather.innerHTML=`<h5 class="card-text" id="weather">Weather Condition: ${arr[0].weather[0].description} </h5>`
        //console.log(arr[0].weather[0].description)

    }catch(e){
        City.innerHTML=`<h3 class="card-title" id="cityName">City Name :</h3>`
        country.innerHTML= `<h6 class="card-subtitle mb-2 text-muted" id="countryName">Country:</h6>`
        temp.innerHTML=`<h5 class="card-text" id="temp">Temperature:</h5>`
        humidity.innerHTML=`<h5 class="card-text" id="humidity">Humidity:</h5>`
        weather.innerHTML=`<h5 class="card-text" id="weather">Weather Condition:</h5>`
        alert("please enter city name correctly");
        res.status(404).send()
    }
}
}
submitbtn.addEventListener('click',getdata)