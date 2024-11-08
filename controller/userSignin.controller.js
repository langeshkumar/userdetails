import userModel from "../model/usreSignup.model.js";

export const checkSignin = async (req, res) => {
    try {
        const { useremail, userpassword } = req.body;

        if (useremail == '' || userpassword == '') {
            res.json({
                message: "Some inputs are missing..!"
            });
        }
        const user = await userModel.findOne({ useremail: useremail });

        if (!user) {
            res.status(404).json({
                message: "user not found..!"
            });
        }

        const checkPassword = userpassword === user.userpassword;

        if (!checkPassword) {
            res.status(401).json({
                message: "Password is Invalid..!"
            });
        }

        res.json({
            message: "SignIn Successfully..!",
            data: user
        });
    } catch (error) {
        res.status(500).json({
            message: "Server error..!",
            error: error.message
        });
    }
};