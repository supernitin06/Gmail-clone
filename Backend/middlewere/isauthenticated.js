const jwt = require('jsonwebtoken');
const authenticate = async (req, res, next) => {
    // Example logic for extracting userId from JWT token
    const token = req.cookies.token;
    if (token) {
        try {
            const decoded = jwt.verify(token, process.env.SECRET_KEY);
            req.id = decoded.userId; // Set userId from token
            next();
        } catch (error) {
            return res.status(401).json({ message: "Invalid token" });
        }
    } else {
        return res.status(401).json({ message: "No token provided" });
    }
};

module.exports = authenticate;
