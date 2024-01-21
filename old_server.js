const express = require("express");
const session = require("express-session");
const path = require("path");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const saltRounds = 10; // Adjust the number of salt rounds as needed

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.use(
  session({
    secret: "your-secret-key", // Replace with a strong secret key
    resave: false,
    saveUninitialized: true,
  })
);

// Send the main HTML file on the root route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

// Database connection
const db = require("./database");

// Registration Endpoint
app.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  // Basic validation
  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Please provide all required fields." });
  }

  try {
    // Check if the user already exists
    const userExists = await db.query(
      "SELECT * FROM players WHERE username = $1 OR email = $2",
      [username, email]
    );
    if (userExists.rows.length) {
      return res
        .status(400)
        .json({ success: false, message: "Username or email already exists." });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // Insert the new user into the database with initial values for financial data
    const insertUserQuery = `
        INSERT INTO players (username, email, password, current_balance, total_income, total_savings)
        VALUES ($1, $2, $3, $4, $5, $6)
        RETURNING player_id;
      `;

    const initialBalance = 0.0; // Set initial balance
    const initialIncome = 0.0; // Set initial income
    const initialSavings = 0.0; // Set initial savings

    // Execute the query and get the player_id of the newly registered user
    const newUser = await db.query(insertUserQuery, [
      username,
      email,
      hashedPassword,
      initialBalance,
      initialIncome,
      initialSavings,
    ]);
    const playerId = newUser.rows[0].player_id;

    // Set default outgoings for the new user
    await setDefaultOutgoings(playerId);

    res.json({ success: true, message: "Registration successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Login Endpoint
app.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({
      success: false,
      message: "Please provide both username and password.",
    });
  }

  try {
    const result = await db.query("SELECT * FROM players WHERE username = $1", [
      username,
    ]);
    const user = result.rows[0];

    if (user) {
      const match = await bcrypt.compare(password, user.password);
      if (match) {
        // Set the session variable for the logged-in user
        req.session.userId = user.player_id;

        // Set a cookie using the player_id as the session identifier
        res.cookie("sessionId", user.player_id, {
          httpOnly: true,
          // secure: true,  // Uncomment in production with HTTPS
        });

        res.json({ success: true, message: "Login successful" });
      } else {
        res
          .status(401)
          .json({ success: false, message: "Incorrect password." });
      }
    } else {
      res.status(404).json({ success: false, message: "User not found." });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
});

// Add this route to fetch financial data for the logged-in user
app.get("/get-financial-data", async (req, res) => {
  try {
    const player_id = req.session.userId;
    // Fetch financial data from the database based on the logged-in user's ID
    const financialData = await db.query(
      "SELECT current_balance, total_income, total_savings FROM players WHERE player_id = $1",
      [player_id]
    );

    if (financialData.rows.length === 1) {
      res.json(financialData.rows[0]);
    } else {
      res.status(404).json({ message: "Financial data not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Add this route to get the user's username
app.get("/get-username", async (req, res) => {
  try {
    // Retrieve the player_id from the session (you may use cookies or session management)
    const player_id = req.session.userId;

    // Check if a player_id was found in the session
    if (player_id) {
      // Query the database to get the username associated with the player_id
      const result = await db.query(
        "SELECT username FROM players WHERE player_id = $1",
        [player_id]
      );
      if (result.rows.length > 0) {
        const username = result.rows[0].username;
        res.status(200).send(username);
      } else {
        res.status(404).send("Username not found");
      }
    } else {
      res.status(401).send("Unauthorized"); // User is not logged in
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.post("/logout", (req, res) => {
  // Clear the session and remove the session cookie
  req.session.destroy((err) => {
    if (err) {
      console.error(err);
      return res.status(500).json({ success: false, message: "Logout failed" });
    }
    res.clearCookie("sessionId");
    res.json({ success: true, message: "Logout successful" });
  });
});

app.get("/check-session", (req, res) => {
  if (req.session.userId) {
    // User is logged in
    res.status(200).json({ success: true, message: "User is logged in" });
  } else {
    // User is not logged in
    res.status(401).json({ success: false, message: "User is not logged in" });
  }
});

// Add this route to fetch economic data
app.get("/get-economic-data", async (req, res) => {
  try {
    // Fetch economic data from the database
    const economicData = await db.query(
      "SELECT data_type, value, date_updated, description FROM economic_data"
    );

    if (economicData.rows.length > 0) {
      res.json(economicData.rows);
    } else {
      res.status(404).json({ message: "Economic data not found" });
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/get-economic-calendar", async (req, res) => {
  try {
    // Fetch economic calendar data for the specified date range
    const economicCalendarData = await db.query(`
            SELECT *
            FROM economic_calendar
            WHERE date >= current_date - interval '5 days'
            AND date <= current_date + interval '5 days'
            ORDER BY date, time;
        `);

    res.json(economicCalendarData.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

// Endpoint to get job vacancies
// Endpoint to get all job vacancies
app.get("/get-all-job-vacancies", async (req, res) => {
  try {
    // Define SQL query to retrieve all job vacancies data
    const jobVacanciesQuery = `
            SELECT *
            FROM jobboard
            WHERE vacantpositions > 0;
        `;

    // Execute the query
    const jobVacanciesData = await db.query(jobVacanciesQuery);

    // Return the job vacancies data as JSON
    res.json(jobVacanciesData.rows);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

app.get("/get-user-employment-details", async (req, res) => {
  try {
    // Retrieve the player_id from the session (you may use cookies or session management)
    const player_id = req.session.userId;

    // Check if a player_id was found in the session
    if (player_id) {
      // Query the database to get the player's details based on player_id
      const playerDetailsQuery = `
                SELECT employment_status, skill, experience
                FROM players
                WHERE player_id = $1;
            `;
      const result = await db.query(playerDetailsQuery, [player_id]);

      if (result.rows.length > 0) {
        const playerDetails = result.rows[0];
        res.status(200).json(playerDetails);
      } else {
        res.status(404).send("Player not found");
      }
    } else {
      res.status(401).send("Unauthorized"); // User is not logged in
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal server error");
  }
});

app.get("/weekly-outgoings", async (req, res) => {
  try {
    const player_id = req.session.userId; // Get the player_id from the session

    // Check if a player_id was found in the session
    if (player_id) {
      // Query the database to get the weekly outgoings data based on player_id
      // Replace the following line with your actual database query
      const weeklyOutgoingsData = await db.query(
        "SELECT * FROM player_outgoings WHERE player_id = $1",
        [player_id]
      );

      // Filter out outgoings with amount > 0
      const filteredOutgoings = {};
      for (const key in weeklyOutgoingsData.rows[0]) {
        if (weeklyOutgoingsData.rows[0][key] > 0) {
          filteredOutgoings[key] = weeklyOutgoingsData.rows[0][key];
        }
      }
      console.log(filteredOutgoings);

      res.json(filteredOutgoings);
    } else {
      res.status(401).send("Unauthorized"); // User is not logged in
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal server error" });
  }
});

async function setDefaultOutgoings(playerId) {
  try {
    // Insert default outgoings in a single row
    await db.query(
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

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
