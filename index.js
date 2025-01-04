const express = require ("express");
const dbconnection = require("./config/db");
const routes = require("./routes/distribution");
const cors =require("cors");
const bodyParser = require("body-parser");

const app =express();
app.use(cors({ origin: true, credentials: true }));

//dbconnection
dbconnection();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/",(req, res) => res.send("Hello world"));
app.use("/api/distribution", routes);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server running on PORT ${PORT}`));