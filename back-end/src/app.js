import cors from "cors"
import express from "express"
import "express-async-errors"
import { handleError } from "./middleware/errorHandler.js"
import { router } from "./routes/index.js"

const app = express()
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => res.send("API Online."))
app.use(router)

app.use(handleError)

export default app