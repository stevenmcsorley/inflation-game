// events/emitEvent.js
const db = require('../database');

async function emitEvent(eventType, aggregateId, aggregateType, eventData) {
    const insertEventQuery = `
        INSERT INTO events (event_type, aggregate_id, aggregate_type, event_data)
        VALUES ($1, $2, $3, $4);
    `;
    await db.query(insertEventQuery, [eventType, aggregateId, aggregateType, JSON.stringify(eventData)]);
}

module.exports = { emitEvent };
