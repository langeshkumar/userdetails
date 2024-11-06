import express from "express";
import userDatabase from "./lib/database.js";

const app = express();
const PORT = "8081";

// sample msg 
app.get('/', (req, res) => {
    res.send({ message: "Port is running..!" });
});

// database connection
userDatabase();

// listen port 
app.listen(PORT, () => {
    console.log(`Server is getting ready to http://localhost:${PORT}`);
});