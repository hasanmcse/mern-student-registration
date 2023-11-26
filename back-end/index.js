const app = require("./app")
const mongoose = require("mongoose")

const PORT = 5050;



//database connection
const connectDb = async () =>{
    try{
     await mongoose.connect("mongodb://127.0.0.1:27017/studentRegister");
     console.log("db is connected")
    }catch(error){
     console.log("db is not connected");
    }
 }


app.listen(PORT,  async()=> {
    console.log("Backend server running");
    await connectDb();
})
