import express from "express"
import userRoutes from "./routes/userRoutes.js"
import borrowersRoutes from "./routes/borrowersRoutes.js"
import dotenv from 'dotenv'
import databaseConection from "./db/database.js"


dotenv.config()
databaseConection()
const app = express()

app.use(express.json())
app.use("/api/users", userRoutes)
app.use("/api/borrowers", borrowersRoutes)



const port = 8080;
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`)
})