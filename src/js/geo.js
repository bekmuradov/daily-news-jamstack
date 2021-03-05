const notificationElement = document.querySelector(".notification");

// Set User's Position
function setPosition(position) {
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  const url = `/.netlify/functions/weather_api?lat=${latitude}&lon=${longitude}`;
  let requestOptions = {
    method: 'GET',
    redirect: 'follow'
  };
  fetch(url, requestOptions)
  .then(res => res.json())
  .then(res => {
    const data = res.data;
    document.querySelector("#location").textContent = `${data.city}, ${data.country}`
    document.querySelector("#temp").innerHTML = `Temperature: ${data.current.weather.tp}\xB0<span>C</span>`;
    document.querySelector("#pollution").textContent = 'Air Index: ' + data.current.pollution.aqius;
    document.querySelector("#humidity").innerHTML = `Humidity: ${data.current.weather.hu}<span>%</span>`;

    document.querySelector("#weather").classList.remove("hidden")
  })
  .catch(error => console.log('error', error));
}

function error(err) {
  console.warn(`ERROR(${err.code}): ${err.message}`);
}

// Check if browser supports geolocation
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(setPosition, error);
  } else {
    notificationElement.style.display = "block";
    notificationElement.innerHTML =
      "<p>Geolocation is not supported by this browser.</p>";
  }
}
getLocation()
// navigator.geolocation.getCurrentPosition(setPosition, error)


// function success(pos) {
//   var crd = pos.coords;

//   console.log('Your current position is:');
//   console.log(`Latitude : ${crd.latitude}`);
//   console.log(`Longitude: ${crd.longitude}`);
//   console.log(`More or less ${crd.accuracy} meters.`);
// }

// function error(err) {
//   console.warn(`ERROR(${err.code}): ${err.message}`);
// }

// navigator.geolocation.getCurrentPosition(success, error);
