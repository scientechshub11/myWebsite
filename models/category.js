
module.exports = (sequelize, type) => {
    const category = sequelize.define('category', {
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
        name: {
            type: type.STRING,
            allowNull: true
        },
    }, {
        underscored: true,
        freezeTableName: false,
    })

    // blog relationship
    category.belongsTo(sequelize.model('blog'),
        {
            foreignKey: {
                allowNull: true
            }
        })
    
    return category
}