const express= require('express');
const cors  = require('cors') 
const connectDB = require('./config/db');
const foodRouter = require('./routes/foodRoute');

//app config
const app = express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors()); //access backend from frontend

//db connection
connectDB(); 

//api endpoints
app.use("/api/food", foodRouter)
app.use("/images",express.static('uploads'));
 

app.listen(port,()=>{
    console.log(`App is running on port:${port}`);
})