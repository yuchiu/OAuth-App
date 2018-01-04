const express =  require('express')
const authRoutes = require('./routes/authRoutes')

const app = express()

app.set('view engine', 'ejs')

//create route
app.get('/', (req, res)=>{
    res.render('home')
})

//set up routes
app.use('/auth', authRoutes)

app.listen(5000, ()=>{
    console.log('app now listening for request on port 5000')
})