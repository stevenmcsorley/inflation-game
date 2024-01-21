// controllers/loginController.js
const bcrypt = require('bcrypt');
const { query } = require('../database'); // Correctly imported

const { emitEvent } = require('../events/emitEvent');

async function loginUser(req, res) {
    const { username, password } = req.body;
    // Basic validation...

    try {
        const result = await query("SELECT * FROM players WHERE username = $1", [username]);
        const user = result.rows[0];

        if (user) {
            const match = await bcrypt.compare(password, user.password);
            if (match) {
                // Set session, cookies, etc.
                req.session.userId = user.player_id;
                res.cookie("sessionId", user.player_id, { httpOnly: true });

                // Emit a successful login event
                await emitEvent('UserLoggedIn', user.player_id, 'player', { username });
                res.json({ success: true, message: "Login successful" });
            } else {
                // Emit a failed login event
                await emitEvent('LoginFailed', null, 'player', { username, reason: 'Incorrect password' });
                res.status(401).json({ success: false, message: "Incorrect password." });
            }
        } else {
            // Emit a failed login event
            await emitEvent('LoginFailed', null, 'player', { username, reason: 'User not found' });
            res.status(404).json({ success: false, message: "User not found." });
        }
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

module.exports = { loginUser };
