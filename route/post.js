const router = require('express').Router();
const controller = require('../controllers/post');

//Fetch All Posts
router.get('/',controller.allPost)


//create new Post
router.post("/",controller.createPost)

router.route("/:id")
.get(controller.getPost)
.patch(controller.editPost)
.delete(controller.deletePost)

module.exports = router;