import mongoose from "mongoose";
import CONFIG from "./index.js";

 const connect=mongoose.connect(CONFIG.MOGODB_URL).then((conn) =>
{
    console.log(`DATABASE connection success and connected at ${conn.connection.host}`);
}).catch((err) =>
{
    console.log(`DB connection error ${err}`);
})

export default connect