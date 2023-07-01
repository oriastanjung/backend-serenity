require("dotenv").config();
const express = require('express');
const mongoose = require('mongoose');
const placesRouter = require('./api/places/router');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const app = express();



const PORT = process.env.PORT || 3000;
mongoose.set("strictQuery", false);

const connectDB =  async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URL);
        console.log("Mongodb connected");

    } catch (error) {
        console.log(error);
        process.exit();
    }
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.get("/", (req,res) => {
    return res.send("Welcome to Serenity Free API")
})
app.use("/places", placesRouter)


connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`listening on localhost:${PORT}`)
    })
})