// events/userRegisteredHandler.js
const { query } = require('../database');

async function handleUserRegistered(event) {
    const { aggregate_id: userId } = event;

    // Initialize financial stats for the newly registered user
    const financialStatsQuery = `
        UPDATE players
        SET current_balance = 0.0, total_income = 0.0, total_savings = 0.0
        WHERE player_id = $1;
    `;
    await query(financialStatsQuery, [userId]);
}

module.exports = { handleUserRegistered };
