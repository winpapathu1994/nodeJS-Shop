const router = require('express').Router();

let users = [
    {id: 1, name:"Mg Mg", age:30},
    {id: 2, name:"Su Su", age:17},
    {id: 3, name:"Aye Aye", age:33},
    {id: 4, name:"Danial", age:25},
    {id: 5, name:"Krystal", age:22},
]
//Fetch All users
router.get('/',(req, res)=>{
    res.json({users});
})


//create new user
router.post("/",(req,res)=>{
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
router.route("/:id")
.get((req, res)=>{
    let id = req.params.id;
    let user = users.find(user => user.id == id);
    if(user){
        res.json({user});
    }else{
        res.json({msg: "No user not found"})
    }

})
.patch((req,res)=>{
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
.delete((req,res)=>{
    let id = req.params.id;
    users = users.filter(user => user.id != id)
       res.json(users);
})
//fetch user
/* router.get('/:id',(req, res)=>{
    let id = req.params.id;
    let user = users.find(user => user.id == id);
    if(user){
        res.json({user});
    }else{
        res.json({msg: "No user not found"})
    }

})

//edit user
router.patch("/:id",(req,res)=>{
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
router.delete("/:id",(req,res)=>{
    let id = req.params.id;
    users = users.filter(user => user.id != id)
       res.json(users);
})
 */
module.exports = router;