const express = require('express');
const connectDB = require('./db/connectDB');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');

dotenv.config(); // Load environment variables

const app = express();
connectDB(); // Connect to the database

// Middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser()); 

// CORS options to allow requests from frontend
const corsOptions = {
    origin: 'http://localhost:5173', 
    credentials: true, 
};

app.use(cors(corsOptions)); // Apply CORS middleware

// Routes
app.use("/api/v1/user", require("./routes/userroutes") );
app.use("/api/v1/email", require("./routes/emailroutes") );

// Start the server
const port = process.env.PORT || 3010;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
