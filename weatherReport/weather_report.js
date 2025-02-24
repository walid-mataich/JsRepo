function showweatherDetails(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const apikey = "ef91e9b31bad6fd6b12386405a553ff0";
  const apikey2 = "AIzaSyDCTKf-lAKvp9orSmbLDsU3AwOFTMPyBFw";

  const apiUrl2 = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    city
  )}&key=${apikey2}`;

  fetch(apiUrl2)
    .then((response) => response.json())
    .then((data) => {
      const lat = data.results[0].geometry.location.lat;
      const lng = data.results[0].geometry.location.lng;

      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=${apikey}`;

      fetch(apiUrl)
        .then((response) => response.json())
        .then((data) => {
          const weatherInfo = document.getElementById("weatherInfo");
          weatherInfo.innerHTML = `<h2>Weather in ${data.name}</h2>
                                  <p>Temperature: ${data.main.temp} &#8451;</p>
                                  <p>Weather: ${data.weather[0].description}</p>`;
        });
    });
}

document
  .getElementById("weatherForm")
  .addEventListener("submit", showweatherDetails);
