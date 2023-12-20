const btn = document.getElementById("searchBtn");
btn.addEventListener("click", () => {
  const inputValue = document.getElementById("search").value;
  const apiKey = "85f97b6448c988a414d5489fd3d5f670";

  axios
    .get(
      `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&units=metric&appid=${apiKey}`
    )
    .then((response) => {
      const weatherData = response.data;
      let temp = weatherData.main.temp;
      let icon = weatherData.weather[0].icon;
      let description = weatherData.weather[0].description;
      let name = weatherData.name;
      let humidity = weatherData.main.humidity;

      let text = document.getElementById("container");
      text.innerHTML = ` <img src="https://openweathermap.org/img/w/${icon}.png" alt="">
        <h4>  ${name}</h4>
        <h4>${description}</h4>
        <h4> Temperature:${temp} &#8451;</h4>
        <h4>Humidity percentage:${humidity}%</h4>`;
      document.getElementById("container").appendChild(text);
    })
    .catch((error) => console.log(error));
});
