const express = require('express');
const app = express();
app.use(express.json());


const userRoute = require('./route/user');
app.use('/users', userRoute);

app.listen(3000, console.log("server is running at port 3000"));