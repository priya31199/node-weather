// console.log("Client side javascript file is loaded")

fetch('http://puzzle.mead.io/puzzle').then( (response) => {
    response.json().then((data) => {
        console.log(data)
    })
})

fetch('http://localhost:3000/weather?address=pune').then( (response) => {
    response.json().then((data) => {
        if(data.error){
            console.log(data.error)
        }else{
            console.log(data.location)
            console.log(data.forecast)
        }
        
    })
})

const weatherform = document.querySelector('form')
const search = document.querySelector('input')
const messageone = document.querySelector('#message-1')
const messagetwo = document.querySelector('#message-2')


// messageone.textContent = 'From Javascript'

weatherform.addEventListener('submit',(e) => {

    e.preventDefault()
    
    const location = search.value

    // console.log('testing')
    // console.log(location)

    messageone.textContent = 'Loading..'
    messagetwo.textContent = ''

    fetch('http://localhost:3000/weather?address=' + location).then( (response) => {
    response.json().then((data) => {
        if(data.error){
            // console.log(data.error)
            messageone.textContent = data.error
        }else{
            // console.log(data.location)
            // console.log(data.forecast)
            messageone.textContent = data.location
            messagetwo.textContent = data.forecast
        }
        
    })
})

})