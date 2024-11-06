import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const userDatabase = async () => {
    try {
        await mongoose.connect(process.env.DB_CONNECTION);
        console.log('Database Connected Successfully..!');
    } catch (error) {
        console.error('Database error : ', error.message);
        process.exit(1);
    }
}

export default userDatabase;