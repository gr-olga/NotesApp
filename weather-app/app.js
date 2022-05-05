const request = require('postman-request');

const url = 'http://api.weatherstack.com/current?access_key=cc0eabcc9ddc9963188ef6f15d0dc34c&query=37.8266,-122.4233'
console.log('hi');

request(url, (err, res) =>{
    const weatherData = JSON.parse(res.body)
console.log(weatherData.current)
})

