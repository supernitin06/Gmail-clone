const mongoose = require("mongoose");

const emailSchema = new mongoose.Schema({
    to: {
        type: String,
        required: true,
    },
    subject: {
        type: String,
        required: true,
    },
    message: {
        type: String,
        required: true,
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId, // Defines the userId as an ObjectId
        ref: 'User', // References the 'User' model
        required: true, // Indicates that this field is required
    },
}, { timestamps: true });

// Export the Email model
module.exports = mongoose.model("Email", emailSchema);
