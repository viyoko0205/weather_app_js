const api_key = '85da053fda57d86314a2a898ec5cd015';

export const urls = {
  //endpoint urls
  currentWeather(lat, lon) {
    return `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=matric`;
  },

  geocode(loca) {
    return `https://api.openweathermap.org/geo/1.0/direct?q=${loca}&limit=5`;
  },
};

const fetchData = function (url, callback) {
  fetch(`${url}$appid=${api_key}`)
    .then((response) => response.json())
    .then((data) => callback(data))
    .catch((error) => console.log(error));
};

fetchData(urls.geocode('london'), function (locations) {
  console.log(locations);
});

//구조분해 할당
