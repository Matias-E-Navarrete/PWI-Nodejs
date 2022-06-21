import express from "express";
import { findUsersController, getUserController, createUserController } from '../controller/user.controller.js'

export const userRouter = express.Router()


// * GET User page
userRouter.get('/list', async (req, res) => {
    const users = await findUsersController()
    res.render('users', { users })
})

// * GET User page
userRouter.get('/list/:id', async (req, res) => {
    const { id } = req.params
    const user = await getUserController(id)
    res.render('userDetail', { user })
})

// GET localhost:3000/users/
userRouter.get('/', async (req, res) => {
    const user = await findUsersController()
    res.send(user)
})

// GET localhost:3000/users/:id
// userRouter.get('/:id', (req, res) => {
//     const userId = Number(req.params.id)
//     const user = getUserController(userId)
//     if (!user) res.send('<h1>No Existe Usuario</h1>')
//     res.send(user)
// })

// POST localhost:3000/users/
userRouter.post('/', (req, res) => {
    const body = req.body
    const user = createUserController(body)
    res.send(user)
})

// PUT localhost:3000/users/:id
userRouter.put('/:id', (req, res) => {
    const userData = req.body
    // El controlador hace la actualizacion y me devuelve los datos Ej: const userUpdated = updateUser(userData)
    res.send(userUpdated)
})



// // POST localhost:3000/users/login
// userRouter.post('/login', (req, res) => {
//     const dataLogin = req.body
// })

// // POST localhost:3000/users/register
// userRouter.post('/register', (req, res) => {
//     const dataLogin = req.body
// })