import app from "./src/app.js"
import connectDB from "./src/config/db.js"
import db from "./src/config/db.js"

connectDB()

app.listen(3000, () => {
    console.log("server is running on 3000")
})