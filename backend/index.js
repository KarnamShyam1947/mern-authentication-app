const mongoose = require("mongoose")
const express = require("express")
const cors = require('cors');
const authRouter = require("./router/AuthRouter");

const PORT = 3000
const DB_URL = 'mongodb://localhost:27017/authentication';

app = express()
app.use(express.json())
app.use(cors())

mongoose.connect(DB_URL)
    .then(() => {
        console.log('Successfully connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB', err);
    });

app.use("/api/v1/auth", authRouter)

app.listen(PORT, () => {
    console.log(`Server started listening at ${PORT}`);
})
