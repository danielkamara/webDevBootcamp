const request = require('request');
request('https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139', (error, response, body) => {
    console.error('error:', error); // Print the error if one occurred
    console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    var parsedData = JSON.parse(body);
    console.log(parsedData.weather); // Print the HTML for the homepage.
});


