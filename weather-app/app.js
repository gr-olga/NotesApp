const request = require('postman-request');
const geoUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiZ3Itb2xnYSIsImEiOiJjbDJzejZmamwwM291M2xwbzkycHpkdnFiIn0.jCxgzvQN0SWgN3myOGUrEw&limit=1'

request({url:geoUrl, json:true}, (err, res) =>{
      const longitude = res.body.features[0].center[1]
      const latitude = res.body.features[0].center[0]

    console.log(`longitude, ${longitude} latitude ${latitude}`)
    const url = `http://api.weatherstack.com/current?access_key=cc0eabcc9ddc9963188ef6f15d0dc34c&query=${longitude},${latitude}&units=m`
    console.log('hi');

    request({url:url, json:true}, (err, res) =>{
        // const weatherData = JSON.parse(res.body)
        console.log(`it is  currently ${res.body.current.temperature} degrees out. There uv index is ${res.body.current.uv_index} `)
    })

})

// const url = `http://api.weatherstack.com/current?access_key=cc0eabcc9ddc9963188ef6f15d0dc34c&query=${longitude},${latitude}&units=f`
// console.log('hi');
//
// request({url:url, json:true}, (err, res) =>{
//    // const weatherData = JSON.parse(res.body)
// console.log(`it is  currently ${res.body.current.temperature} degrees out. There uv index is ${res.body.current.uv_index} `)
// })
//pas: Sp!r!t78



