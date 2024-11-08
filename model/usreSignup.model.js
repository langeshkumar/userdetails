import mongoose from "mongoose";

const userSignupSchema = new mongoose.Schema({
    unsername: {
        type: String,
        required: [true, "User Name is required..!"],
        trim: true,
    },
    useremail: {
        type: String,
        trim: true,
        required: [true, "Email is required..!"],
        unique: true,
        lowercase: true,
        validate: {
            validator: function (useremail) {
                const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
                return emailRegex.test(useremail);
            },
            message: props => `${props.value} this email is invalid`
        }
    },
    userpassword: {
        type: String,
        required: [true, "Password is required..!"],
        unique: true,
        minlength: [8, "Password must be at least 8 characters long"],
        validate: {
            validator: function (userpassword) {
                const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
                return passwordRegex.test(userpassword);
            },
            message: props => `${props.value} this password is invalid`
        }
    }
});

const userModel = new mongoose.model("userdetails", userSignupSchema);

export default userModel;