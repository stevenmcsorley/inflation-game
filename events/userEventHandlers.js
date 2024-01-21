// events/userEventHandlers.js
const { query } = require('../database');

async function handleUserRegisteredEvent(event) {
    const { aggregate_id: userId } = event;

    // Set initial financial stats for the new user
    const updateFinancialStatsQuery = `
        UPDATE players
        SET current_balance = 0.0, total_income = 0.0, total_savings = 0.0
        WHERE player_id = $1;
    `;
    await query(updateFinancialStatsQuery, [userId]);
}

module.exports = { handleUserRegisteredEvent };
