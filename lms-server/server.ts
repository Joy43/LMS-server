import{app} from "./app"
import connectDB from "./utils/db";
require("dotenv").config();
// -----------create our server------------
app.listen(process.env.PORT,()=>{
    console.log(`LMS server is connected with port ${process.env.PORT}`)
    connectDB();
})


