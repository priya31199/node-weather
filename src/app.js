const path =require('path')
const express =require('express')
const hbs =require('hbs')
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

console.log(__dirname)
console.log(path.join(__dirname,'../public'))

const app = express()

// Define paths for express config
const publicDirctorypath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname,'../template/views')
const partialsPath = path.join(__dirname,'../template/partials')

// Setup handlers engine and view location
app.set('view engine','hbs')
app.set('views',viewsPath)

hbs.registerPartials(partialsPath)

// Setup static directory to serve
app.use(express.static(publicDirctorypath))

//
app.get('',(req,res) => {
    res.render('index',{
        title : 'Weather app',
        name : 'Priyanka Patil'
    })
})

app.get('/about',(req,res) => {
    res.render('about',{
        title : 'About me',
        name : 'Priyanka Patil'
    })
})


app.get('/help',(req,res) => {
    res.render('help',{
        helptext : 'This is help text',
        title : 'Help',
        name : 'Priyanka Patil'
    })
})


app.get('',(req,res) => {
    res.send('<h1>Hello Express</h1>')
})

// app.get('/help',(req,res) => {
//     res.send({
//         name : 'Priyanka',
//         age : 28
//     }
// )
// })

app.get('/object',(req,res) => {
    res.send([{
        name : 'Priyanka',
        age : 28
    },
    {
        name : 'Prachi',
        age : 29
    }
])
})

// app.get('/about',(req,res) => {
//     res.send('<h1>About</h1>')
// })

// app.get('/weather',(req,res) => {
//     res.send([{
//         forecast : 50,
//         location : 'pune'
//     }])
// })

// section 8 : - The query string
// app.get('/weather',(req,res) => {
//     if(!req.query.address){
//         return  res.send({
//             error : 'You must provide address'
//         })
//     }else{
        
//     }
//     res.send([{
//         forecast : 50,
//         location : 'pune',
//         address : req.query.address
//     }])
// })

// challage dyanamic json

app.get('/weather',(req,res) => {
    if(!req.query.address){
        return  res.send({
            error : 'You must provide address'
        })
    }
        geocode(req.query.address, (error, { latitude,longitude,location } ={} ) => {
            if(error){
                return res.send({ error })
            }
            forecast(latitude, longitude, (error, forecastData) => {
                if (error) {
                    return res.send({ error })
                }

                res.send({
                    forecast : forecastData,
                    location,
                    address : req.query.address
                })
            })
        })
})

app.get('/products',(req,res) => {
    if(!req.query.search){
     return  res.send({
            error : 'You must provide search term'
        })
    }
    console.log(req.query.search)
    // req.query()
    res.send({
        products : []
    })
})

app.get('/help*',(req,res) => {
    // res.send('Help article not found')
    res.render('404',{
        title : '404 help',
        name : 'Priyanka Patil',
        errormsg : 'Help article not found'
    })
})

app.get('*',(req,res) => {
        // res.send('Page not found')

    res.render('404',{
        title : '404',
        name : 'Priyanka Patil',
        errormsg : 'Page not found'
    })
})

app.listen(3000,() => {
    console.log('Server is up on port 3000')
})