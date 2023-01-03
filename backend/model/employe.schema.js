import mongoose, { model } from "mongoose";
import Role from "../utills/getRole.js";


const employeSchema= mongoose.Schema(
    {
        Name:
        {
            type:String,
            required:[true, "Name is required Attribute"],
            maxLength:[20, "Name must not not be greater then 20 charater"]
        },
        Desgination:
        {
            type:String,
            enum:Object.values(Role),
            default:Role.IT
        },
        salary:
        {
            type:Number,
            required:[true, "Salary is required"]
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model("Emp", employeSchema)