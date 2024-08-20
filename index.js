const express = require('express');
const dotenv = require('dotenv').config;
const app = express();
const path = require('path');
const router = require('./routers/index')
const port = process.env.PORT || 5005;
const Path= path.join(__dirname , "/views/dist");

app.set("view engine" , "ejs");
app.set("views",Path)

app.use(express.static(Path))

app.use('/',router)

app.listen(port , (err) =>{
    if(!err){
        console.log(`server is running on http://localhost:${port}`);
    }
})
