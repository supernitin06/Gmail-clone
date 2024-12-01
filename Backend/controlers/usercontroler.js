const asyncHandler = require('express-async-handler');
const bcrypt = require('bcrypt');
const Users = require('../models/usermodels'); // Ensure this path is correct
const jwt = require('jsonwebtoken');

// Register a new user
const registerUser = asyncHandler(async (req, res) => {
    const { username, email, password } = req.body;

    // Check if all required fields are provided
    if (!username || !email || !password) {
        res.status(400);
        throw new Error('All fields are required');
    }

    // Check if the user already exists
    const userExists = await Users.findOne({ email });
    if (userExists) {
        res.status(400);
        throw new Error(`User with email ${email} already exists`);
    }

    // Hash the user's password
    const hashedPassword = await bcrypt.hash(password, 10);
    const profilePhoto = 'https://avatar.iran.liara.run/public/boy'; // Hardcoded profile photo URL

    // Create the user
    const user = await Users.create({
        username,
        email,
        password: hashedPassword,
        profilephoto: profilePhoto,
    });

    res.status(201).json({ message: "User created successfully" });
});

// User login
const login = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check if all required fields are provided
    if (!email || !password) {
        res.status(400);
        throw new Error('All fields are required');
    }

    // Find the user by email
    const user = await Users.findOne({ email });
    if (!user) {
        res.status(400);
        throw new Error(`User with email ${email} does not exist`);
    }

    // Check if the provided password matches the stored hashed password
    const isPasswordMatched = await bcrypt.compare(password, user.password);
    if (!isPasswordMatched) {
        res.status(400);
        throw new Error("Invalid password");
    }

    // Generate JWT token
    const tokenData = { userId: user._id };
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: '1d' });

    // Send the token as an HTTP-only cookie
    return res.status(200)
        .cookie("token", token, {
            maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
            httpOnly: true,
            sameSite: 'strict',
            sucess: true
        })
        .json({
            message: `${user.username} logged in successfully.`,
            user: user,
        });
});
const logout = async (req, res) => {
    try {
        // Set the token cookie to an empty string and set its maxAge to 0 to delete it
        return res.status(200).cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out successfully",
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Failed to log out" });
    }
};

module.exports = { registerUser, login ,logout };
