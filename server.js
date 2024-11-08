import express from "express";
import userDatabase from "./lib/database.js";
import Routersignup from "./router/userSignup.router.js";
import Routersignin from "./router/userSignin.router.js";

const app = express();
const PORT = "8081";

// sample msg 
app.get('/', (req, res) => {
    res.send({ message: "Port is running..!" });
});

// understand json request in postman
app.use(express.json());

// understand urlencoded request in postman
app.use(express.urlencoded({ extended: true }));

// database connection
userDatabase();

// usersignup process 
app.use('/usersignup', Routersignup);
app.use('/usersignin', Routersignin);

// listen port 
app.listen(PORT, () => {
    console.log(`Server is getting ready to http://localhost:${PORT}`);
});