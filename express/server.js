const express = require('express');

const PORT = 3005;

const app = express();

app.set('view engine', 'ejs');


// app.get('/', function(request, response){
//     response.send('Hello Doctor');
// });

app.use(function(req, res, next){
    console.log('running middleware')
    next();
})

app.use(express.static('public'))

app.get('/thing', function(req, res){
    const templateVars = {
        brother: "Yakko",
        warnerBrothers: ["Yakko", "Wakko", "Dot"]
    }
    res.render('index', templateVars)
})




app.listen(PORT, function(){console.log(`running on port: ${PORT}`)})