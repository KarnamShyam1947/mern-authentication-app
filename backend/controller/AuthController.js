const UserModel = require("../models/UserModel")

const findUserByEmail = async (queryEmail) => {
    const user = await UserModel.findOne(
        {
            email: queryEmail
        }
    )

    return user;
}

const registerUser = async (req, res) => {

    const user = await findUserByEmail(req.body.email);
    console.log(user);

    if (user) {
        return res.status(409).json({
            error: "User already exists with same email"
        })
    }

    const newUser = await UserModel.create(req.body);
    res.status(201).json({
        message: "User account created successfully",
        user: newUser
    })
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(400).json({ error: "Email and password are required" });
    }

    try {
        
        const user = await findUserByEmail(email);

        if (!user) {
            return res.status(400).json({ error: "User not found" });
        }

        if (user.password !== password) {
            return res.status(400).json({ error: "Invalid password" });
        }
        
        res.status(200).json({ message: "Login success" });

    } catch (error) {
        console.error('Error during login:', error);
        res.status(500).json({ error: "Internal server error" });
    }
};

module.exports = {
    loginUser,
    registerUser
}
