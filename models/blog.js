
module.exports = (sequelize, type) => {
    const blog = sequelize.define('blog', {
        id: {
            type: type.INTEGER,
            primaryKey: true,
            allowNull: false,
            autoIncrement: true
        },
        uuidIdentifier: {
            type: type.UUID,
            defaultValue: type.UUIDV4,
            allowNull: false
        },
        title: {
            type: type.TEXT,
            allowNull: true
        },
        subTitle: {
            type: type.TEXT,
            allowNull: true
        },
        description: {
            type: type.TEXT,
            allowNull: true
        },
        link: {
            type: type.TEXT,
            allowNull: true
        },
        metaData: {
            type: type.JSONB,
            allowNull: true
        },
        ImageUrl:{
            type: type.TEXT,
            allowNull: true
        },
        type:{
            type: type.STRING,
            allowNull: true
        },
        videoUrl:{
            type: type.TEXT,
            allowNull: true
        },
        ImageName:{
            type: type.TEXT,
            allowNull: true
        },
        videoName:{
            type: type.TEXT,
            allowNull: true
        },
        userId: {
            type: type.INTEGER,
            allowNull: true
        },
    }, {
        underscored: true,
        freezeTableName: false,
    })

    // blog relationship
    
    return blog
}