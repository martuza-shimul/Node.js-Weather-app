const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')
// const request = require('request')


// const url = 'https://api.darksky.net/forecast/f3f71b0caf605df5e8188ad56cb5face/37.8267,-122.4233?units=si'

// request({ url: url, json: true}, (error, response) => {
//     // console.log(response.body.currently)
//     if (error){
//         console.log('Unable to connect to weather service!')
//     }else if (response.body.error){
//         console.log('unable to find location')
//     }else {
//         console.log("It's currently " + response.body.currently.temperature + " degrees out. There is a " + response.body.currently.precipProbability + "% chance of rain")
//     }
    
// })


// Geocoding

// const url_geocode = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Dhaka.json?access_token=pk.eyJ1IjoibWFydHV6YS1zaGltdWwiLCJhIjoiY2p3dGR2Ymp4MGkzaTN5bXFtcmx6NzRuMCJ9.IVmVLX5aqs21doCD-Hb-rg&limit=1'

// request({url: url_geocode, json: true}, (error1, response1) => {

    

//     if (error1){
//         console.log('Unable to conncet GeoCode service')
//     }else if (response1.body.features.length === 0){
//         console.log('Something went wrong!')
//     }else {
//         const longitude = response1.body.features[0].center[0]
//         const latitude = response1.body.features[0].center[1]
//         console.log('Longitude is ' + longitude + ' and Latitude is ' + latitude)

//     }
// })

// const address = process.argv[2]

// if (!address){
//     console.log('Please provide an address!')
// }else{
//     // Object destructuring
//     geocode ( address, (error, {latitude, longitude, location}) => {
//         if(error){
//             return console.log(error)
//         }
    
//         forecast(latitude,longitude, (error, forecastData) => {
//             if(error){
//                 return console.log(error)
//             }
    
//             console.log(location)
//             console.log(forecastData)
//         })
    
        
//     })
// }
  

const address = process.argv[2]

if (!address) {
    console.log('Please provide an Address')
} else {
    geocode(address, (error, data) => {
        if(error){
            return console.log('Error', error)
        }
        
        forecast(data.latitude, data.longitude, (error, forecastData) => {
            if(error){
                return console.log(error)
            }
            
            console.log(data.location)
            console.log(forecastData)
        })
        
    })
}



