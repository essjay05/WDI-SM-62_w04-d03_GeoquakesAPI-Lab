// BOILER PLATE
const
    express = require('express'),
    app = express(),
    path = require('path'),
    PORT = 3000;

// CONFIGURATIONS

// MIDDLEWARE
app.use(express.static(path.join(__dirname)));

// ROUTES
app.get('/', (req, res) =>{
    res.sendFile('index.html');
})

// CONNECT TO LISTEN PORT
app.listen(3000, err => {
    console.log(err || `Application listening to ${PORT}`);
});