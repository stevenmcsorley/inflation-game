const session = require("express-session");

// Session configuration
const sessionConfig = {
    secret: "your-secret-key", // Ensure this is a secure key in production
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true, // The cookie only accessible by the web server
      secure: false, // Allow non-HTTPS connections if true
      sameSite: 'lax', // Set the SameSite attribute to 'lax' for compatibility
      // Add `domain` if your services are under different subdomains
    },
};

// Middleware to check if the user is logged in
function isAuthenticated(req, res, next) {
    if (req.session && req.session.userId) {
        return next();
    }
    console.log(req.session);
    return res.status(401).json({ success: false, message: "Unauthorized" });
}

// Function to clear session
function clearSession(req) {
    return new Promise((resolve, reject) => {
        req.session.destroy((err) => {
            if (err) reject(err);
            else resolve();
        });
    });
}

module.exports = { sessionConfig, isAuthenticated, clearSession };
