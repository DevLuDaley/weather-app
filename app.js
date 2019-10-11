// #find long and lat 
window.addEventListener('load', () => {
    let long;
    let lat;
    let temperatureDescription = document.querySelector(".temperature-description");
    let temperatureDegree = document.querySelector(".temperature-degree");
    let locationTimezone = document.querySelector(".location-timezone");

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            // console.log(position);
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = "https://cors-anywhere.herokuapp.com/";
            const api = `${proxy}https://api.darksky.net/forecast/32150a97f3f2392c3c0111d7fca17730/${lat},${long}`;


            // https://api.darksky.net/forecast/32150a97f3f2392c3c0111d7fca17730/37.8267,-122.4233
            fetch(api)
                .then(response => {
                    return response.json();
                })
                .then(data => {
                    console.log(data);
                    // data.currently.temperature = same as code below
                    const { temperature, summary } = data.currently;
                    // set dom elements from the api
                    temperatureDegree.textContent = temperature;
                    temperatureDescription.textContent = summary;
                    locationTimezone.textContent = data.timezone;
                });
        });


    }
});




//  else {
//     h1.textContent = "hey this isn't working for some odd reason, my bad!"2