const DB = require('../dbs/user');
const Helper = require('../utils/helpers');

const allUser = async(req,res,next) => {
    let users = await DB.find();
    Helper.fMsg(res, "All of Users", users);
    //res.json({msg:"all user"});
}
const getUser = async(req,res,next) => {

    let id = req.params.id;
    let user = await DB.findById(id);
    Helper.fMsg(res, "Get User", user);
    //res.json({msg:"get user"});
}
const createUser = async(req,res,next) => {
    let saveUser = new DB(req.body);
    let result = await saveUser.save();
    Helper.fMsg(res, "Create Users", result);
   // res.json({msg:"create user", result:req.body});
}
const editUser = async(req,res,next) => {
    let user = await DB.findById(req.params.id);
    if(user){
       await DB.findByIdAndUpdate(user._id, req.body);
       let returnUser = await DB.findById(user._id);
       Helper.fMsg(res, "Update User", returnUser);
    }else{
       // if error
       next(new Error("Error, No user"))
        //res.json({msg:"cannot edit user"});
    }
    //res.json({msg:"edit user",result: req.body});
}
const deleteUser = async(req,res,next) => {
    await DB.findByIdAndDelete(req.params.id);
    Helper.fMsg(res, "Delete User");
    //res.json({msg:"delete user"});
}

module.exports = {
allUser,
getUser,
createUser,
editUser,
deleteUser
}