import dotenv from 'dotenv'
dotenv.config();

const CONFIG={
    PORT:process.env.PORT,
    SECRET:process.env.SECRET,
    MOGODB_URL:process.env.MOGODB_URL

}

export default CONFIG