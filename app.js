const express = require('express');
const authRoutes = require('./routes/oauthRoutes');
const passportSetup = require('./config/passportSetup')

const app = express();

//setup view engine
app.set('view engine', 'ejs');

//setup oauth routes
app.use('/auth', authRoutes);

//create home route
app.get('/',(req,res)=>{
    res.render('home');
})

app.listen(3000,()=>{
    console.log("Listening on port 3000");
})