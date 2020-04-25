const request = require('request')

// const url = 'http://api.weatherstack.com/current?access_key=a680248cc4047bff4a3be0dbc4cff45f&query=37.8267,-122.4233&units=f'

// request({url:url,json:true},(error,response) => {
//     // console.log(response)
//     // const data = JSON.parse(response.body)
//     //  console.log(data.current)
//     //  console.log(response.body.current)
//     // console.log('It is currently : ' + response.body.current.temperature + ' degrees out. It feel like ' + response.body.current.feelslike +' degrees out.')
//     console.log(response.body.current.weather_descriptions[0] + '. It is currently : ' + response.body.current.temperature + ' degrees out. It feel like ' + response.body.current.feelslike +' degrees out.')

// })

// Geocoding
// Address -> Lat/Long ->weather

// const goecodeurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHBhdGlsMzEiLCJhIjoiY2s5NnZsaHc5MGJvbTNsbGkxZ3Z3cHhwbyJ9.bMNNxfjUyCVxI1QJsKqzCg&limit=1'

// request({url:goecodeurl,json:true},(error,response) => {
//     const Latitude = response.body.features[0].center[1]
//     const longitude = response.body.features[0].center[0]

//     console.log(Latitude,longitude)
// })

// Error handling

// request({url:url,json:true},(error,response) => {
//     // console.log(error)
//     if(error){
//         // if internet connection not found
//         console.log('Unable to connect to weather service')
//     }else if(response.body.error){
//         // if const url = 'http://api.weatherstack.com/current?access_key=a680248cc4047bff4a3be0dbc4cff45f&query=&units=f'
//         //after removing lat & lon it print unable to find location
//         console.log('Unable to find location')
//   }else{
//          console.log(response.body.current.weather_descriptions[0] + '. It is currently : ' + response.body.current.temperature + ' degrees out. It feel like ' + response.body.current.feelslike +' degrees out.')
//     }


// })


// Error handling in geocoding

// const goecodeurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHBhdGlsMzEiLCJhIjoiY2s5NnZsaHc5MGJvbTNsbGkxZ3Z3cHhwbyJ9.bMNNxfjUyCVxI1QJsKqzCg&limit=1'

// request({url:goecodeurl,json:true},(error,response) => {
  
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.features.length === 0){
//       console.log('Unable to find location. Try another location')
//     }else{
//         const Latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]

//         console.log(Latitude,longitude)
//     }

// })




// const goecodeurl ='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicHBhdGlsMzEiLCJhIjoiY2s5NnZsaHc5MGJvbTNsbGkxZ3Z3cHhwbyJ9.bMNNxfjUyCVxI1QJsKqzCg&limit=1'

// request({url:goecodeurl,json:true},(error,response) => {
  
//     if(error){
//         console.log('Unable to connect to weather service')
//     }else if(response.body.features.length === 0){
//       console.log('Unable to find location. Try another location')
//     }else{
//         const Latitude = response.body.features[0].center[1]
//         const longitude = response.body.features[0].center[0]

//         console.log(Latitude,longitude)

        

//     }

// })



// const geocode = (address,callback) => {
// const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHBhdGlsMzEiLCJhIjoiY2s5NnZsaHc5MGJvbTNsbGkxZ3Z3cHhwbyJ9.bMNNxfjUyCVxI1QJsKqzCg&limit=1'

//     request({url:url,json:true},(error,response) => {

//         if(error){
//             callback('Unable to connect to weather service',undefined)
//         }else if(response.body.features.length === 0){
//             callback('Unable to find location. Try another location',undefined)
//         }else{
                   
//                     callback(undefined,{
//                          Latitude : response.body.features[0].center[1],
//                          longitude : response.body.features[0].center[0],
//                          location : response.body.features[0].place_name
                        
//                             })
            
                    
            
//                 }
//     })

// }

// module.exports = geocode




const geocode = (address,callback) => {
    const url ='https://api.mapbox.com/geocoding/v5/mapbox.places/' + address + '.json?access_token=pk.eyJ1IjoicHBhdGlsMzEiLCJhIjoiY2s5NnZsaHc5MGJvbTNsbGkxZ3Z3cHhwbyJ9.bMNNxfjUyCVxI1QJsKqzCg&limit=1'
    
        request({url,json:true},(error,{ body }) => {
    
            if(error){
                callback('Unable to connect to weather service',undefined)
            }else if(body.features.length === 0){
                callback('Unable to find location. Try another location',undefined)
            }else{
                       
                        callback(undefined,{
                             Latitude : body.features[0].center[1],
                             longitude : body.features[0].center[0],
                             location : body.features[0].place_name
                            
                                })
                
                        
                
                    }
        })
    
    }
    
    module.exports = geocode