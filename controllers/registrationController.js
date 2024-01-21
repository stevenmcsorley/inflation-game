// controllers/registrationController.js
const bcrypt = require("bcrypt");
const { query } = require("../database"); // Correctly imported
const { emitEvent } = require("../events/emitEvent");
const { processEvent } = require("../events/eventProcessor"); // Import processEvent
const saltRounds = 10;


async function setDefaultOutgoings(playerId) {
  try {
    // Insert default outgoings in a single row
    await query(
      `
          INSERT INTO player_outgoings (
              player_id,
              weekly_housing, weekly_transport, weekly_food, weekly_utilities, weekly_recreation, weekly_council_tax, weekly_communications, weekly_insurance, weekly_other,
              monthly_housing, monthly_transport, monthly_food, monthly_utilities, monthly_recreation, monthly_council_tax, monthly_communications, monthly_insurance, monthly_other,
              annual_housing, annual_transport, annual_food, annual_utilities, annual_recreation, annual_council_tax, annual_communications, annual_insurance, annual_other
          ) VALUES (
              $1,
              50.00, 20.00, 40.00, 20.00, 10.00, 10.00, 10.00, 5.00, 10.00,
              200.00, 80.00, 160.00, 80.00, 40.00, 40.00, 40.00, 20.00, 40.00,
              2400.00, 960.00, 1920.00, 960.00, 480.00, 480.00, 480.00, 240.00, 480.00
              )
              `,
      [playerId]
    );
  } catch (error) {
    console.error(error);
    throw new Error("Failed to set default outgoings");
  }
}

async function registerUser(req, res) {
  const { username, email, password } = req.body;
  // Validation logic here...

  try {
    const userExists = await query(
      "SELECT * FROM players WHERE username = $1 OR email = $2",
      [username, email]
    );
    if (userExists.rows.length) {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already exists." });
    }

    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user and get their ID
    const insertUserQuery =
      "INSERT INTO players (username, email, password) VALUES ($1, $2, $3) RETURNING player_id;";
    const newUser = await query(insertUserQuery, [
      username,
      email,
      hashedPassword,
    ]);
    const userId = newUser.rows[0].player_id;

    // Emit and process the UserRegistered event
    const userRegisteredEvent = {
      type: "UserRegistered",
      aggregate_id: userId,
      // Other event details
    };
    await setDefaultOutgoings(userId);

    // Emit the UserRegistered event with the new user's ID
    await emitEvent("UserRegistered", userId, "player", {
      username,
      email,
      hashedPassword,
    });
    await processEvent(userRegisteredEvent);

    res.json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
}

module.exports = { registerUser };
