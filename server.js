// server.js
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors"); // Import the cors middleware
const session = require("express-session");
const {
  sessionConfig,
  isAuthenticated,
  clearSession,
} = require("./utils/sessionUtils");
const registrationRoute = require("./routes/registration");
const loginRoute = require("./routes/login");
const app = express();
const db = require("./database"); // Ensure this is set up to provide a db instance
const PORT = process.env.PORT || 3000;
const http = require("http");
const { Server } = require("socket.io");

app.use(
  cors({
    origin: "http://localhost:3001", // Adjust this to match your frontend origin
    credentials: true, // Set credentials to true to allow cookies
  })
);

// Serve static files from the 'public' directory
app.use(express.static("public"));

app.use(bodyParser.json());
app.use(session(sessionConfig));
const httpServer = http.createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3001", // Allow your frontend origin
    methods: ["GET", "POST"], // Allowed request methods
    credentials: true, // Allow credentials
  },
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);
  // You can now emit events to the client
  socket.emit("welcome", { message: "Welcome to the WebSocket server!" });

  socket.emit("economicFactorsUpdate", generateEconomicFactors());
});

const liveOutgoings = (weeklyOutgoings_data, economicFactors_data) => {
  let weeklyOutgoings = weeklyOutgoings_data;
  let economicFactors = economicFactors_data;

  for (let category in weeklyOutgoings) {
    for (let factorGroup in economicFactors) {
      for (let factor in economicFactors[factorGroup]) {
        if (economicFactors[factorGroup][factor]["affects"][category]) {
          let change = parseFloat(
            economicFactors[factorGroup][factor]["affects"][category]
          );
          let originalValue = parseFloat(weeklyOutgoings[category]);
          let newValue = originalValue + (originalValue * change) / 100;
          weeklyOutgoings[category] = newValue.toFixed(2);
        }
      }
    }
  }

  console.log(weeklyOutgoings);
};

// io.on('connection', (socket) => {
//   console.log('a user connected:', socket.id);

//   // Store the player_id in the socket object when the user logs in
//   socket.on('login', (player_id) => {
//     socket.player_id = player_id;
//   });

// Use the player_id in the setInterval callback
//   setInterval(async () => {
//     if (socket.player_id) {
//       const weeklyOutgoings = await fetchWeeklyOutgoings(player_id);
//       const economicFactors = generateEconomicFactors();
//       liveOutgoings(weeklyOutgoings, economicFactors);

//       // Emit the updated data to the client
//       socket.emit('weeklyOutgoings', weeklyOutgoings);
//       // socket.emit('economicFactorsUpdate', economicFactors);
//     }
//   }, 10 * 1000); // every 10 seconds
// });

// Periodically generate and emit economic factors
setInterval(async () => {
  const economicFactors = generateEconomicFactors();

  io.emit("economicFactorsUpdate", economicFactors);
}, 3 * 1000); // every 10 seconds

const generateRandomPercentage = () => {
  return (Math.random() * 4 - 2).toFixed(2); // Generates a random percentage from -2% to +2%
};

const getRandomKey = (obj) => {
  const keys = Object.keys(obj);
  return keys[Math.floor(Math.random() * keys.length)];
};

const generateEconomicFactors = () => {
  const allFactors = {
    "Economic Factors": {
      "Inflation Rate": {
        affects: {
          weekly_housing: generateRandomPercentage(),
          weekly_food: generateRandomPercentage(),
          weekly_utilities: generateRandomPercentage(),
        },
      },
      "Deflation Rate": {
        affects: {
          weekly_housing: generateRandomPercentage(),
          weekly_food: generateRandomPercentage(),
          weekly_utilities: generateRandomPercentage(),
        },
      },
      "Exchange Rate": {
        affects: {
          weekly_transport: generateRandomPercentage(),
          weekly_recreation: generateRandomPercentage(),
        },
      },
    },
    "Government Policies": {
      "Taxation Changes": {
        affects: {
          weekly_food: generateRandomPercentage(),
          weekly_restaurants: generateRandomPercentage(),
        },
      },
      "Subsidy Adjustments": {
        affects: {
          weekly_food: generateRandomPercentage(),
          weekly_transport: generateRandomPercentage(),
        },
      },
    },
    "Market Conditions": {
      "Demand-Supply Dynamics": {
        affects: {
          weekly_food: generateRandomPercentage(),
          weekly_recreation: generateRandomPercentage(),
        },
      },
      "Price Fluctuations": {
        affects: {
          weekly_housing: generateRandomPercentage(),
          weekly_transport: generateRandomPercentage(),
        },
      },
    },
    "Global Events": {
      "Natural Disasters": {
        affects: {
          weekly_utilities: generateRandomPercentage(),
          weekly_recreation: generateRandomPercentage(),
        },
      },
      "Economic Shocks": {
        affects: {
          weekly_housing: generateRandomPercentage(),
          weekly_food: generateRandomPercentage(),
        },
      },
    },
    "Regulatory Changes": {
      "New Laws and Regulations": {
        affects: {
          weekly_utilities: generateRandomPercentage(),
          weekly_transport: generateRandomPercentage(),
        },
      },
      "Industry-Specific Policies": {
        affects: {
          weekly_food: generateRandomPercentage(),
          weekly_recreation: generateRandomPercentage(),
        },
      },
    },
  };

// Randomly select one main category
const categoryKeys = Object.keys(allFactors);
const randomCategoryKey = categoryKeys[Math.floor(Math.random() * categoryKeys.length)];
const randomCategory = allFactors[randomCategoryKey];

// Randomly select a sub-event within the selected category
const subEventKeys = Object.keys(randomCategory);
const randomSubEventKey = subEventKeys[Math.floor(Math.random() * subEventKeys.length)];
const randomSubEvent = randomCategory[randomSubEventKey];

// Create a new object with the same structure but only one sub-event
const selectedFactors = {
  [randomCategoryKey]: {
    [randomSubEventKey]: {
      "affects": {}
    }
  }
};

// Populate the affects object with weekly, monthly, and annual keys
for (const key in randomSubEvent["affects"]) {
  if (key.startsWith("weekly_")) {
    const change = randomSubEvent["affects"][key];
    const monthlyKey = key.replace("weekly_", "monthly_");
    const annualKey = key.replace("weekly_", "annual_");
    selectedFactors[randomCategoryKey][randomSubEventKey]["affects"][key] = change;
    selectedFactors[randomCategoryKey][randomSubEventKey]["affects"][monthlyKey] = change; // Assuming the same change applies to monthly
    selectedFactors[randomCategoryKey][randomSubEventKey]["affects"][annualKey] = change; // Assuming the same change applies to annual
  }
}


  // Create a message for the "economicFactorsAlerts" event
  const alertsMessage = `${randomCategoryKey} - ${randomSubEventKey}, affects: `;
  const affectsMessages = [];
  for (const [key, value] of Object.entries(randomSubEvent["affects"])) {
    const direction = value > 0 ? "up" : "down";
    affectsMessages.push(`${key.replace('weekly_', '')}: ${direction} ${Math.abs(value)}%`);
  }
  console.log('ALERTS',alertsMessage + affectsMessages.join(', '));

  // Emit the "economicFactorsAlerts" event with the constructed message
  io.emit("economicFactorsAlerts", alertsMessage + affectsMessages.join(', '));

return selectedFactors;
};

// const generateEconomicFactors = () => {
//   return {
//       "Economic Factors": {
//           "Inflation Rate": {
//               "affects": {
//                   "weekly_housing": generateRandomPercentage(),
//                   "weekly_food": generateRandomPercentage(),
//                   "weekly_utilities": generateRandomPercentage()
//               }
//           },
//           "Deflation Rate": {
//               "affects": {
//                   "weekly_housing": generateRandomPercentage(),
//                   "weekly_food": generateRandomPercentage(),
//                   "weekly_utilities": generateRandomPercentage()
//               }
//           },
//           "Exchange Rate": {
//               "affects": {
//                   "weekly_transport": generateRandomPercentage(),
//                   "weekly_recreation": generateRandomPercentage()
//               }
//           }
//       },
//       "Government Policies": {
//           "Taxation Changes": {
//               "affects": {
//                   "weekly_food": generateRandomPercentage(),
//                   "weekly_restaurants": generateRandomPercentage()
//               }
//           },
//           "Subsidy Adjustments": {
//               "affects": {
//                   "weekly_food": generateRandomPercentage(),
//                   "weekly_transport": generateRandomPercentage()
//               }
//           }
//       },
//       "Market Conditions": {
//           "Demand-Supply Dynamics": {
//               "affects": {
//                   "weekly_food": generateRandomPercentage(),
//                   "weekly_recreation": generateRandomPercentage()
//               }
//           },
//           "Price Fluctuations": {
//               "affects": {
//                   "weekly_housing": generateRandomPercentage(),
//                   "weekly_transport": generateRandomPercentage()
//               }
//           }
//       },
//       "Global Events": {
//           "Natural Disasters": {
//               "affects": {
//                   "weekly_utilities": generateRandomPercentage(),
//                   "weekly_recreation": generateRandomPercentage()
//               }
//           },
//           "Economic Shocks": {
//               "affects": {
//                   "weekly_housing": generateRandomPercentage(),
//                   "weekly_food": generateRandomPercentage()
//               }
//           }
//       },
//       "Regulatory Changes": {
//           "New Laws and Regulations": {
//               "affects": {
//                   "weekly_utilities": generateRandomPercentage(),
//                   "weekly_transport": generateRandomPercentage()
//               }
//           },
//           "Industry-Specific Policies": {
//               "affects": {
//                   "weekly_food": generateRandomPercentage(),
//                   "weekly_recreation": generateRandomPercentage()
//               }
//           }
//       }
//   };
// };

setInterval(() => {
  // Your logic to generate dynamic data, e.g., simulate economic changes
  const dynamicData = {
    // This could be more complex logic that fetches or calculates new data
    timestamp: new Date(),
    randomValue: Math.random(),
    // ...add other dynamic values
  };

  // Emit the dynamic data to all connected clients
  io.emit("dynamicData", dynamicData);
}, 10 * 1000); // every minute

// Healthcheck endpoint
app.get("/healthcheck", (req, res) => {
  res.status(200).json({ success: true, message: "Server is healthy" });
});

app.use("/register", (req, res) => registrationRoute(req, res, db));
app.use("/login", (req, res) => loginRoute(req, res, db));
// Logout Endpoint
app.post("/logout", async (req, res) => {
  try {
    await clearSession(req);
    res.json({ success: true, message: "Logout successful" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Logout failed" });
  }
});

// Check-session endpoint
app.get("/check-session", (req, res) => {
  if (req.session.userId) {
    // User is logged in
    res.status(200).json({ success: true, message: "User is logged in" });
  } else {
    // User is not logged in
    res.status(401).json({ success: false, message: "User is not logged in" });
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

httpServer.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
