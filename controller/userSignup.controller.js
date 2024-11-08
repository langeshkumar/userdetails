import userModel from "../model/usreSignup.model.js";

export const getsignup = async (req, res) => {
    try {
        const getuserDetails = await userModel.find();
        res.json(getuserDetails);

    } catch (error) {
        res.status(400).json({
            message: "Some think went wrong..!",
            error: error.message
        });
    }
};

export const postsignup = async (req, res) => {

    try {
        const { unsername, useremail, userpassword } = req.body;

        if (unsername == '' || useremail == '' || userpassword == '') {
            res.status(400).json({
                message: "Some inputs are missing..!",
            });
        }

        const datamodel = new userModel({
            unsername: unsername,
            useremail: useremail,
            userpassword: userpassword
        });

        const result = await datamodel.save();
        res.status(201).json({
            message: "User data saved Successfully..!",
            data: result
        });

    } catch (error) {
        res.status(400).json({
            message: "Some think went wrong..!",
            error: error.message
        });
    }
};

export const editsignup = (req, res) => {
    res.send({ message: "This is edit..!" });
};

export const deletesignup = (req, res) => {
    res.send({ message: "This is delete..!" });
};