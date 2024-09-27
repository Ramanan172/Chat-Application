require("dotenv").config();

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE);

mongoose.connection.on("error",(err) => {
    console.log("Mongoose Connection ERROR: " + err.message);
});
mongoose.connection.once('open',()=>{
    console.log("MongoDB Connected!" );
})

//bring in the models
require("./models/Users");
require("./models/Message");
require("./models/Chatroom");

const app = require('./app');

app.listen(8000,()=>{
    console.log("Server listening on port 8000");
})