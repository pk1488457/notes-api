const express = require("express");
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();


const mongoose = require("mongoose");

app.use(express.json());

app.use(cors());


app.use("/user", userRouter)
app.use("/note", noteRouter)

app.get("/", (req, res)=>{
    res.send(" NOTE APP by Pankaj Kumar")
});

const PORT =process.env.PORT || 3000;

mongoose.connect(process.env.MONGO_URL)
.then(()=>{
    app.listen(PORT, ()=>{
    console.log("server start on port "+ PORT)
});

})
.catch((error)=>{
    console.log(error);
})
