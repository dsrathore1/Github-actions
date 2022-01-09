const express = require("express");

const app = express();

app.get("/app", (req, res) => {
    res.send("Hello Genius");
});

app.listen(5000, () => {
    console.log(`Your site is live on http://localhost:${5000}`);
});