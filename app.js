require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const fileUpload =require('express-fileupload')
const path = require('path');
mongoose.connect(`mongodb://127.0.0.1:27017/${process.env.DB_NAME}`);

app.use(express.json());
app.use(fileUpload())
app.use('/uploads', express.static(path.join(__dirname,'uploads')));

const userRoute = require('./route/user');
const postRoute = require('./route/post');
const catRoute = require('./route/category');

/*
const {saveFile,saveFiles, deleteFile} = require('./utils/gallery');

 app.post('/gallery',saveFile,(req,res,next) => {
res.status(200).json({msg:"File uploaded", filename:req.imageName})
})

app.post('/galleries',saveFiles,(req,res,next) => {
    res.status(200).json({msg:"Mutiple Files uploaded", filename:req.body.images})
})

app.delete('/deleteFile',async(req,res,next) => {
   // console.log('req',req);
    await deleteFile(req.body.name);
    res.status(200).json({msg:"Files Deleted"})
})

const funky = (req,res,next) => {
    console.log(req.warnningMsg);
    res.json({msg: "Comming with get method"});
}
const isLogin = (req,res,next) => {
    if(1 == 1){
        req.successMsg = "We are good to go";
        next();
    }else{
        next(new Error('You are not login'))
    }
}

const isAdmin = (req,res,next) => {
    if(2 == 2){
        console.log(req.successMsg);
        req.warnningMsg = "This is warnning message"
        next();
    }else{
        next(new Error('You are not admin user'))
    }
}

app.use('/users',isLogin,isAdmin, funky);
 */
app.use('/categories', catRoute);
app.use('/users', userRoute);
app.use('/posts', postRoute);

app.use((err,req,res,next) => {
    //console.log('error =====' , err)
    err.status = err.status || 200;
    res.status(err.status).json({
        cons:false,
        msg:err.message
    })
})
app.listen(process.env.PORT, console.log(`server is running at port ${process.env.PORT}`));