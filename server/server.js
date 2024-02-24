const express = require("express");
const bodyParser = require("body-parser");
const db = require("./database"); // Import database connection

const app = express();

// Parse incoming data (e.g., JSON)
app.use(bodyParser.json());

// Sample API routes for each table:

// GET /api/table1 (get all items)
app.get("/api/category", (req, res) => {
  db.all("SELECT * FROM category", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.get("/api/sub_category", (req, res) => {
  db.all("SELECT * FROM sub_category", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});

app.get("/api/dua", (req, res) => {
  db.all("SELECT * FROM dua", (err, rows) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(rows);
    }
  });
});
// GET /api/table1/:id (get item by ID)
app.get("/api/sub_category/:id", (req, res) => {
  const id = req.params.id;
  db.get("SELECT * FROM subcategory WHERE id = ?", [id], (err, row) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else if (!row) {
      res.status(404).json({ message: "Subcategory not found" });
    } else {
      res.json(row);
    }
  });
});
app.get("/api/category/:id", (req, res) => {
  const id = req.params.id;
  console.log("Requested ID:", id); // Check if the ID is correctly extracted
  db.get("SELECT * FROM category WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("Database Error:", err.message);
      res.status(500).json({ error: err.message });
    } else if (!row) {
      console.log("Item not found for ID:", id);
      res.status(404).json({ message: "Item not found" });
    } else {
      console.log("Found item for ID:", id);
      res.json(row);
    }
  });
});

app.get("/api/dua/:id", (req, res) => {
  const id = req.params.id;
  console.log("Requested ID:", id); // Check if the ID is correctly extracted
  db.get("SELECT * FROM dua WHERE id = ?", [id], (err, row) => {
    if (err) {
      console.error("Database Error:", err.message);
      res.status(500).json({ error: err.message });
    } else if (!row) {
      console.log("Item not found for ID:", id);
      res.status(404).json({ message: "Item not found" });
    } else {
      console.log("Found item for ID:", id);
      res.json(row);
    }
  });
});
// Update and Delete routes can be similarly implemented

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
