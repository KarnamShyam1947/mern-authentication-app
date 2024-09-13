const UserModel = require("../models/UserModel")
const bcrypt = require("bcrypt")

const findUserByEmail = async (queryEmail) => {
    const user = await UserModel.findOne(
        {
            email: queryEmail
        }
    )

    return user;
}

const registerUser = async (req, res) => {
    const { email, password } = req.body;

    const user = await findUserByEmail(email);
    console.log(user);

    if (user) {
        return res.status(409).json({
            error: "User already exists with same email"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await UserModel.create({
        ...req.body,
        password: hashedPassword
    });
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

        const match = await bcrypt.compare(password, user.password);
        if (!match) {
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
