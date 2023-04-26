const DB = require('../dbs/post');
const Helper = require('../utils/helpers');

const allPost = async(req,res,next) => {
    let posts = await DB.find().populate('user','-password');
    Helper.fMsg(res, "All Posts", posts);
   // res.json({msg:"all Post"});
}
const getPost = async(req,res,next) => {
    let post = await DB.findById(req.params.id).populate('user');
    if(post){
        Helper.fMsg(res, "Single Posts", post);
    }else{
       next(new Error('No Post with that id sir!'))
    }
    //res.json({msg:"get Post"});
}
const createPost = async(req,res,next) => {
    //let createPost = new DB(req.body);
    //let result = await createPost.save();

    let result = await new DB(req.body).save();
    Helper.fMsg(res, "Create Posts", result);

   // res.json({msg:"create Post",result:req.body});
}
const editPost = async(req,res,next) => {
    res.json({msg:"edit Post"});
}
const deletePost = async(req,res,next) => {
    res.json({msg:"delete Post"});
}

module.exports = {
allPost,
getPost,
createPost,
editPost,
deletePost
}