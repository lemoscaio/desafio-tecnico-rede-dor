import { Router } from "express"
import { addressRouter } from "./addressRouter.js"

export const router = Router()

router.use(addressRouter)