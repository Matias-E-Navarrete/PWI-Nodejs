import fs from 'fs'
import path from 'path'
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

const userFilePath = path.join(__dirname, '../database/users.json')

export const findUsersController = () => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    return users
}

export const getUserController = (id) => {
    const users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    const user = users.find(user => user.id === id)
    return user
}

export const createUserController = (data) => {
    console.log("DATA ==> ", data);
    let users = JSON.parse(fs.readFileSync(userFilePath, 'utf8'))
    const userCreated = {
        id: users[users.length -1].id + 1,
        name: data.name
    }

    users.push(userCreated)
    const newListUsers = [...users]

    fs.writeFileSync(userFilePath, JSON.stringify(newListUsers))

    return userCreated 
}