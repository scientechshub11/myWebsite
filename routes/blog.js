
const express = require('express');
const blogController = require('../controllers/blog')
const blogObj = new blogController()

const router = express.Router()
router.get('/healthcheck-order', (req, res)=> res.json({status:200,message:"OK"}))

//corrected api
router.get('/create-blog', blogObj.viewCreateBlog)
router.post('/create-blog', blogObj.createBlog)
router.get('/', blogObj.getAllBlogs)



module.exports = router