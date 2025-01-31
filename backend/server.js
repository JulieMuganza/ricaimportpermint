require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./database");

// Import routes
const businessRoutes = require("./routes/businessRoutes");
const importRoutes = require("./routes/importRoutes");
const productRoutes = require("./routes/productRoutes");

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Routes
app.use("/api/business", businessRoutes);
app.use("/api/import", importRoutes);
app.use("/api/product", productRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
