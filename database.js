const { Pool } = require('pg');

// Use environment variables to configure the database connection
const pool = new Pool({
    user: process.env.PGUSER,
    host: process.env.PGHOST,
    database: process.env.PGDATABASE,
    password: process.env.PGPASSWORD,
    port: process.env.PGPORT
});

// Query function for executing queries on the database
const query = (text, params) => pool.query(text, params);

module.exports = { query };
