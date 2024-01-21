// events/eventProcessor.js
const { handleUserRegisteredEvent } = require("./userEventHandlers");

async function processEvent(event) {
  switch (event.type) {
    case "UserRegistered":
      await handleUserRegisteredEvent(event);
      break;
    // Handle other event types as needed
  }
}

module.exports = { processEvent };
