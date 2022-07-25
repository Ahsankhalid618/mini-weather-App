const API_key = `5e73da3aad8f0f1a82c2c91ae031851a`;

const weather = document.querySelector("#weather");
const form = document.querySelector("form");
const search = document.querySelector("#search");
const Submit = document.querySelector("#submit");

async function getWeather(city) {
  weather.innerHTML = `<h2 class="wdetail">Loading </h2>`;
  url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`;
  await fetch(url)
    .then((response) => response.json())
    .then((data) => showWeather(data));
}

function showWeather(data) {
  console.log(data);
  if (data.cod == "404") {
    weather.innerHTML = `<h2 class="wdetail">City Not found</h2>`;
    return;
  }

  weather.innerHTML = `
            <div class="imag">
            <div class="detail">
           <h2 class="Name">${data.name}</h2> 
           <span class="tempC">${data.main.temp} C&deg;</span>
           </div>
           <div class="svgpic">
                <img src ="./openweathermap/${data.weather[0].icon}.svg">
            </div>
            </div>
            <div class="tdetail">
                
                <h2 class="wdetail">${data.weather[0].main}</h2>
            </div>
   `;
}

form.addEventListener("submit", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
Submit.addEventListener("click", function (event) {
  getWeather(search.value);
  event.preventDefault();
});
