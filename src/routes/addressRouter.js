import { Router } from "express"
import { addressController } from "../controllers/addressController.js"

export const addressRouter = Router()

addressRouter.get("/addresses/cep/:cep", addressController.getAddressByCEP)


