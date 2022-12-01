const db = require('../config/sequelize')
const blogModel =  db.model('blog')
class Blog{
    constructor(){
        //this.blogModel =
    }
    async viewCreateBlog(req, res){
        return res.render('createBlog',{

        })
    }

    async createBlog(req, res){
        console.log(req.body)
        return res.json({
            "message":'blog created succcessfully!!'
        })
    }
    async getAllBlogs(req, res){
        let data = await blogModel.findAll({
            order:[['createdAt', 'DESC']]
        }) 
        return res.render('home',{
            data:data
        })
    }
}

module.exports = Blog