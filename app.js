const express = require('express');
const app = express();

const path = require('path');
const publicPath = path.join(__dirname,'./public');
app.use(express.static(publicPath));


app.listen(process.env.PORT || 3000, function () {
    console.log('Mercado Liebre Corriendo');
});

app.get("/", (req, res) => {
    let patheoGet = path.resolve(__dirname, "./views/home.html");
    res.sendFile(patheoGet);
})

app.get("/register.html", (req, res) => {
    let patheoGet = path.resolve(__dirname, "./views/register.html");
    res.sendFile(patheoGet);
})

app.get("/login.html", (req, res) => {
    let patheoGet = path.resolve(__dirname, "./views/login.html");
    res.sendFile(patheoGet);
})




/* app.get('/', (req,res)=>{
    res.sendFile(__dirname + '/views/home.html');
}); */

/* app.get('/login', (req,res)=>{
    res.sendFile(__dirname + '/views/login.html');
});

app.get('/register', (req,res)=>{
    res.sendFile(__dirname + '/views/register.html');
}); */