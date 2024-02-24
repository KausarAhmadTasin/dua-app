const sqlite3 = require("sqlite3");

const db = new sqlite3.Database("./dua_main.sqlite", (err) => {
  if (err) {
    console.error("Error connecting to database:", err.message);
    throw err;
  }
  console.log("Connected to database");
});

// Export the database object and any database-related functions
module.exports = db;
