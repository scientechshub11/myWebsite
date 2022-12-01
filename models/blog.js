
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
            type: type.STRING,
            allowNull: true
        },
        subTitle: {
            type: type.STRING,
            allowNull: true
        },
        description: {
            type: type.STRING,
            allowNull: true
        },
        link: {
            type: type.STRING,
            allowNull: true
        },
        metaData: {
            type: type.JSONB,
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