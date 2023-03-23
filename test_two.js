const express = require('express');
const app = express();
app.use(express.json());

let users = [
    {id: 1, name:"Mg Mg", age:30},
    {id: 2, name:"Su Su", age:17},
    {id: 3, name:"Aye Aye", age:33},
    {id: 4, name:"Danial", age:25},
    {id: 5, name:"Krystal", age:22},
]

//Fetch All users
app.get('/users',(req, res)=>{
    res.json({users});
})

//fetch user
app.get('/user/:id',(req, res)=>{
    let id = req.params.id;
    let user = users.find(user => user.id == id);
    if(user){
        res.json({user});
    }else{
        res.json({msg: "No user not found"})
    }
   
})
//create new user
app.post("/user",(req,res)=>{
    let id = req.body.id;
    let name = req.body.name;
    let age = req.body.age;
    let newUser={
        id,name,age
    };
    users.push(newUser)
    //console.log(users)
    res.json(users);
})

//edit user
app.patch("/user/:id",(req,res)=>{
    let id = req.params.id;
    let name = req.body.name;
    let editUser= users.find(user => user.id == id);
    if(editUser){
        editUser.name = name;
        res.json(users);
    }else{
        res.json({msg: "No user update"});
    }
    //console.log(id);
})
//delete user
app.delete("/user/:id",(req,res)=>{
    let id = req.params.id;
    users = users.filter(user => user.id != id)
       res.json(users);
})

app.get('*',(req,res)=>{
    res.json({msg : "No Route Found!"});
})

app.listen(3000, console.log("server is running at port 3000"));