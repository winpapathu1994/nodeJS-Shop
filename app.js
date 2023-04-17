require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

app.use(express.json());


const userRoute = require('./route/user');
const postRoute = require('./route/post');
app.use('/users', userRoute);
app.use('/posts', postRoute);

app.use((err,req,res,next) => {
    console.log('error =====' , err)
    err.status = err.status || 200;
    res.status(err.status).json({
        cons:false,
        msg:err.message
    })
})
app.listen(process.env.PORT, console.log(`server is running at port ${process.env.PORT}`));