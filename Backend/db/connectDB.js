const mongoose = require('mongoose')    


const connectDB = async () => {
    try {
        const connect = await mongoose.connect(process.env.MONGO_URI);
        console.log("Mongoose Connect Success")
        
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB;