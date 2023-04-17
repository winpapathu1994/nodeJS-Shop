const allPost = async(req,res,next) => {
    res.json({msg:"all Post"});
}
const getPost = async(req,res,next) => {
    res.json({msg:"get Post"});
}
const createPost = async(req,res,next) => {
    res.json({msg:"create Post",result:req.body});
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