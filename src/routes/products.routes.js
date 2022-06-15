import express  from "express"
import { createProductController } from "../controller/products2.controller.js"

export const productsRouter = express.Router()

productsRouter.post('/', (req, res)=>{
    const productData = req.body
    
    const productCreated = createProductController(productData)

    res.send(productCreated)
})