const mongoose = require("mongoose");
// require('mongoose-type-email');
// const bcrypt = require("bcrypt");
const requiredErrMsg = "{PATH} is required."

const UserSchema = new mongoose.Schema(
    {

        name: {
            firstName: {
                type: String,
                //PATH gets replaced with a key
                required: [true, requiredErrMsg],
                minlength: [2, "{PATH} must be {MINLENGTH} characters."] 
            },
            lastName: {
                type: String,
                //PATH gets replaced with a key
                required: [true, requiredErrMsg],
                minlength: [2, "{PATH} must be {MINLENGTH} characters."]
            }, 
        },
        age: {
            type: Number,
            required: [true, requiredErrMsg],
            minlength: [0, "{PATH} must be at least {MINLENGTH}."],
        },

        imgUrl: {
            type: String,
            required: [true, requiredErrMsg],
        },
        balance: {
            type: String,
            required: [true, requiredErrMsg],
        },
        eyeColor: {
            type: String,
            required: [true, requiredErrMsg],
        },
        company: {
            type: String,
            required: [true, requiredErrMsg],
        },
        email: {
            type: String,
            required: [true, requiredErrMsg],
        },
        password: {
            type: String,
            required: [true, requiredErrMsg],
        },
        
        salt: {
            type: String,
    
        },
        phone: {
            type: String,
            required: [true, requiredErrMsg],
        },
        address: {
            type: String,
            required: [true, requiredErrMsg],
        },
        
        
    },

    {timestamps: true},
    

);
    UserSchema.virtual("confirmPassword")
    .get(() => this._confirmPassword)
    .set((value) => (this._confirmPassword = value));

UserSchema.pre("validate", function (next) {
    if (this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Password must match confirm password");
    }
    next();
});

UserSchema.pre("save", function (next) {
    bcrypt.hash(this.password, 10).then((hash) => {
    this.password = hash;
    next();
    });
});


//REGISTER SCHEMA WITH MONGOOSE//
//We just created shcema but has not yet been registered yet//



const User = mongoose.model("User", UserSchema);

module.exports = User;
