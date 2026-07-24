const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
    res.send("Welcome to home page");
});

app.get("/about", (req, res) => {
    res.send("Welcome to about page");
});

// Route with ID parameter
app.get("/user/:id", (req, res) => {
    const id = req.params.id;
    res.send(`User ID is: ${id}`);
});

app.listen(port, () => {
    console.log("Listening on port 3000");
});