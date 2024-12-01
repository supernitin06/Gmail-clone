const Email = require('../models/email.model'); // Correct the path to your model

// Function to create a new email
const createEmail = async (req, res) => {
    try {
        const userId = req.id; // Assuming req.id contains the authenticated user's ID
        const { to, subject, message } = req.body;

        // Check if all required fields are provided
        if (!to || !subject || !message) {
            return res.status(400).json({ message: "All fields are required" });
        }

        // Create a new email document
        const email = await Email.create({
            to,
            subject,
            message,
            userId
        });

        // Respond with the created email
        return res.status(201).json({
            email
        });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
};
const deleteEmail = async (req, res) => {
    try {
        const emailId = req.params.id; // Get the email ID from request parameters

        // Check if email ID is provided
        if (!emailId) {
            return res.status(400).json({ message: "Email ID is required" });
        }

        // Find the email by ID and delete it
        const email = await Email.findByIdAndDelete(emailId);

        // If email is not found, return a 404 error
        if (!email) {
            return res.status(404).json({ message: "Email not found" });
        }

        // Return success message
        return res.status(200).json({ message: "Email deleted successfully" });

    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
};



const findAllEmails = async (req, res) => {
    try {
        const userId = req.id;
        const emails = await Email.find({userId}); // This will retrieve all documents from the 'emails' collection

        return res.status(200).json({
            emails
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Server Error" });
    }
};

module.exports = { createEmail ,deleteEmail,findAllEmails };
