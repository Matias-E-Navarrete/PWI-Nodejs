import { DataTypes } from "sequelize";
import { db } from "../database/connection.js";

export const Users = db.define('users', {
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        len: 45
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false,
        len: 45
    },
    identificationNumber: {
        type: DataTypes.STRING,
        allowNull: true,
        len: 45
    },
    age: {
        type: DataTypes.INTEGER,
        allowNull: true
    }
})

