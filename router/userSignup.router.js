import express from "express"
import { deletesignup, editsignup, getsignup, postsignup } from "../controller/userSignup.controller.js";

const Routersignup = express.Router();

Routersignup.get('/', getsignup);

Routersignup.post('/', postsignup);

Routersignup.put('/:id', editsignup);

Routersignup.delete('/:id', deletesignup);

export default Routersignup