import express from "express";
import { checkSignin } from "../controller/userSignin.controller.js";

const Routersignin = express.Router();

Routersignin.post('/', checkSignin);

export default Routersignin

