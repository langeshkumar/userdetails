import express from "express"
import { deletesignup, editsignup, getsignup, postsignup } from "../controller/userSignup.controller.js";

const Router = express.Router();

Router.get('/', getsignup);

Router.post('/', postsignup);

Router.put('/:id', editsignup);

Router.delete('/:id', deletesignup);

export default Router