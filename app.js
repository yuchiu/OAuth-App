const express =  require('express')

const app = express()

app.set('view engine', 'ejs')

//create route
app.get('/', (req, res)=>{
    res.render('home')
})

app.listen(5000, ()=>{
    console.log('app now listening for request on port 5000')
})