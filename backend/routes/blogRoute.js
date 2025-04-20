const express = require('express');
const router = express.Router();
const blogController = require('../controllers/blogsController');
const authMiddleware = require('../middlewares/authMiddleware');

router.get('/', blogController.getBlogs); 
router.get('/:id', blogController.getBlogById); 
router.get('/category/:category', blogController.getBlogsByCategory); 


router.post('/', authMiddleware, blogController.createBlog); 
router.put('/:id', authMiddleware, blogController.updateBlog); 
router.delete('/:id', authMiddleware, blogController.deleteBlog); 

module.exports = router;
