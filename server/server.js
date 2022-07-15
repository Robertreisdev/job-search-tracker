const express = require("express");
const app = express();
const dbConnect = require("./dbConnect");
app.use(express.json());
const port = process.env.PORT || 5000;
const userRoute = require("./routes/userRoute");
const path = require("path");

app.use("/api/user/", userRoute);

app.get("/", (req, res) => res.send("Test"));

app.listen(port, () => console.log(`Server Started on port ${port}!`));