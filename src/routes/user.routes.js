import express from "express";
import { findUsersController, getUserController, createUserController } from '../controller/user.controller.js'

export const userRouter = express.Router()

userRouter.get('/', (req, res) => {
    const user = findUsersController()
    res.send(user)
})


userRouter.get('/:id', (req, res) => {
    const userId = Number(req.params.id)
    const user = getUserController(userId)
    if (!user) res.send('<h1>No Existe Usuario</h1>')
    res.send(user)
})


userRouter.post('/', (req, res) => {
    const body = req.body
    console.log(body)
    const user = createUserController(body)
    res.send(user)
})