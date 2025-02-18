require("dotenv").config();
const express = require("express");
const app = express();
const connectDb = require("./db/connect");
const cors = require("cors");
const errorHandler = require("./middleware/errorHandler");
const cookieParser = require("cookie-parser");

// Routes import
const userRoutes = require("./routes/user");


// Middleware
app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: ["http://localhost:3000"],
    credentials: true,
  }));


// Routes middleware
app.use("/api/v1/user",userRoutes);

app.get("/",(req,res) => {
    res.status(200).send("<h1>Welcome suresh</h1>");
})

// Error mindleware
app.use(errorHandler);


const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDb(process.env.MONGODB_URI)
        app.listen(port,() => {
            console.log(`Server is running on http://127.0.0.1:${port}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();
