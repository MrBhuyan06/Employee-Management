import mongoose from "mongoose";
import CONFIG from "./index.js";

 const connection= () =>
 {
    mongoose.connect(CONFIG.MOGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then((conn) =>
{
    console.log(`DATABASE connection success and connected at ${conn.connection.host}`);
}).catch((err) =>
{
    console.log(`DB connection error ${err}`);
    console.log(CONFIG.MOGODB_URL);
})

 }
export default connection