
const express = require('express');
const blogController = require('../controllers/blog')
const blogObj = new blogController()
const upload = require('../middleware/upload')
const files = upload.fields([{ name: 'imageFile', maxCount: 1 }, { name: 'video', maxCount: 1 }])
const router = express.Router()
router.get('/healthcheck-order', (req, res)=> res.json({status:200,message:"OK"}))

//corrected api
router.get('/create-blog', blogObj.viewCreateBlog)
router.post('/create-blog', files, blogObj.createBlog)
router.get('/', blogObj.getAllBlogs)
router.get('/about', blogObj.viewAboutPage)
router.get('/contact', blogObj.viewContactPage)
router.get('/post', blogObj.viewPostPage)





module.exports = router