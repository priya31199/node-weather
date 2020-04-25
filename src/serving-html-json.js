const express =require('express')

const app = express()

app.get('',(req,res) => {
    res.send('<h1>Hello Express</h1>')
})

app.get('/help',(req,res) => {
    res.send({
        name : 'Priyanka',
        age : 28
    }
)
})

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

app.get('/about',(req,res) => {
    res.send('<h1>About</h1>')
})

app.get('/weather',(req,res) => {
    res.send([{
        forecast : 50,
        location : 'pune'
    }])
})

app.listen(3000,() => {
    console.log('Server is up on port 3000')
})