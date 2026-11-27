import express from 'express';
const app = express()
const port = 5000

app.get("/", (req, res) => {
    res.send("This is root route");
});

app.listen(port, () => {
    console.log(`The express server is running on the ${port}`);
});