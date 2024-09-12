const mongoose = require("mongoose")

const UserSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "User name is required"]
        },

        email: {
            type: String,
            required: [true, "User email is required"]
        },

        password: {
            type: String,
            required: [true, "password is required"]
        }
    },
    {
        collection: 'Users',
        timestamps: true
    }
)

const UserModel = mongoose.model("users", UserSchema)

module.exports = UserModel

