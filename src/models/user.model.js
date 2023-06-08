const { DataTypes } = require('sequelize');
const { db } = require('./../database/config');

const user = db.define('users', {
    id: {
        
        primaryKey: true,
        autoIncrement: true,
        allowNull: false,
        type: DataTypes.INTEGER,
},
    username: {
            allowNull: false,
            type: DataTypes.STRING,
},
    email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
 },
    password: {
        allowNull: false,
        type: DataTypes.STRING,
},
    role: {
        type: DataTypes.ENUM,
        allowNull: false,
        defaultValue: 'client',
},
    status: {
        type: DataTypes.ENUM('avilable', 'diable'),
        allowNull: false,
        defaultValue: 'available',
    }

    });
    module.exports = user;
