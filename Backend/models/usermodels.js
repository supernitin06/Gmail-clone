const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    profilephoto: {
        type: String,
        required: true,
    },
}, { timestamps: true });

// Export the User model
module.exports = mongoose.model("User", userSchema);
