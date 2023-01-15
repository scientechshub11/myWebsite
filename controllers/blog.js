const db = require('../config/sequelize')
const blogModel = db.model('blog')
class Blog {
    constructor() {
        //this.blogModel =
    }
    async viewCreateBlog(req, res) {
        return res.render('createBlog', {

        })
    }

    async viewAboutPage(req, res) {
        return res.render('about', {

        })
    }

    async viewContactPage(req, res) {
        return res.render('contact', {

        })
    }

    async viewPostPage(req, res) {
        return res.render('post', {

        })
    }

    async createBlog(req, res) {
        let title = req.body.title
        let subTitle = req.body.subTitle
        let type = req.body.type
        let description = req.body.description
        let link = req.body.link
        let imageFile = req.files.imageFile[0]
        let video = req.files.video[0]
        let ImageName = imageFile.originalname
        let videoName = video.originalname
        let ImageUrl = `http://localhost:8080/${ImageName}`
        let videoUrl = `http://localhost:8080/${videoName}`
        let blogObj = {
            title: title,
            subTitle: subTitle,
            type: type,
            description: description,
            link: link,
            ImageName: ImageName,
            videoName: videoName,
            ImageUrl: ImageUrl,
            videoUrl: videoUrl,
        }
        let result = await blogModel.create(blogObj)
        if (result) {
            return res.redirect('/')
        } else {
            const err = new Error('Blog not created successfully!!')
            err.status = 403
            throw err
        }

    }
    async getBlogById(uuidIdentifier){
        let data = await blogModel.findOne({
                where:{
                    uuidIdentifier:uuidIdentifier 
                }
            })
        delete data.dataValues.id
        return data

    }
    async getAllBlogs(req, res) {
        let data = await blogModel.findAll({
            order: [['createdAt', 'DESC']]
        })
        return res.render('home', {
            data
        })
    }
}

module.exports = Blog