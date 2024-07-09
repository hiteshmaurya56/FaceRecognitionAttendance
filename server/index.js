const express = require("express");
const attendance = require("./routes/attendance");
const cors = require("cors");

// const db = require("./models");
const app = express();

const host = "localhost";
const port = 5000;

app.use(cors());
app.use(express.json());

app.use("/api", attendance);
app.listen(port, () => console.log("Server is listening at port 5000"));
