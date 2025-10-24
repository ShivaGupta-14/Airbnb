import mongoose from "mongoose";

const connectDb = async () => {
    try {
        // use MONGO_URI (matches .env) instead of MONGODB_URL
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB connected")
    } catch (error) {
        console.error("db error", error)
        // rethrow so callers know the connection failed
        throw error
    }
}
export default connectDb