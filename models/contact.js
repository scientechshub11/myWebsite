
module.exports = (sequelize, type) => {
    const contact = sequelize.define('contact', {
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
        mobileNo: {
            type: type.STRING,
            allowNull: true
        },
        email: {
            type: type.STRING,
            allowNull: true
        },
        message: {
            type: type.STRING,
            allowNull: true
        }
    }, {
        underscored: true,
        freezeTableName: false,
    })

    // blog relationship
    
    return contact
}