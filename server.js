const express = require("express");
const path = require("path");

const app = express();

const PORT = 4000;

// Serve everything inside the public folder
app.use(express.static(path.join(__dirname, "docs")));

app.listen(PORT, () => {
    console.log(`Website running at http://localhost:${PORT}`);
});