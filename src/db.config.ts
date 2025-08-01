import mongoose, { Mongoose } from 'mongoose'

export const connectDb = async (url: string) => {
    try {
        await mongoose.connect(url)
        console.log(`MongoDB connection successfull`);
        
    } catch (error) {
        console.log(`Database connection failed : ${error}`)
    }
}