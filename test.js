const express = require('express');
const app = express();

app.get('/',(req, res,next)=>{
    //console.log('We are here');
    res.json({msg: "Welcome Pa Pa"});
})
app.get('/user',(req, res,next)=>{
    res.json({name:"Win Pa Pa Thu", age: 29, subject: "NodeJS",msg: "Welcome Pa Pa"});
})
app.post('/user',(req, res,next)=>{
    res.status(200).json({msg: "User Register Success"});
})
app.patch('/user/:id/:name', (req, res)=>{
    let id = req.params.id;
    let name = req.params.name;
   // res.status(200).json({msg : `Edit user id is ${id} and name is ${name}`});
    res.status(200).json({id, name});
})

app.delete('/user/:id', (req, res)=>{
    let id = req.params.id;

   res.status(200).json({msg : `delete user id is ${id}`});

})

app.get('*',(req,res)=>{
    res.json({msg : "No Route Found!"});
})

app.listen(3000, console.log("server is running at port 3000"));