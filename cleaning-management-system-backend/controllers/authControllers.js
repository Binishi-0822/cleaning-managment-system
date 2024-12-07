import User from '../models/user.js';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

export const userRegister = async (req, res) => {

    try {
        const { username, password, role } = req.body;

        const userExists = await User.findOne({ username });

        if(userExists){
            res.status(400).json({ error: "User is already exists" });
        }else{
            const hashPassword = await bcrypt.hash(password, 10);
            const newUser = new User({
                username: username,
                password: hashPassword,
                role: role
            });

            await newUser.save();
            res.status(201).json({ message: "User registered successfully" });
        }

    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
};

export const loginUser = async (req, res) => {

    try {
        const { username, password } = req.body;

        const userExists = await User.findOne({ username });

        if(userExists){
            const isPasswordValid = await bcrypt.compare(password, userExists.password)
            if(!isPasswordValid){
                return res.status(400).json({ error: "Invalid Password" });
            }
            const token = jwt.sign({userId:userExists._id, role: userExists.role},process.env.JWT_SCREE,{expiresIn: "1d"})
            res.status(200).json({ message: "Login Successfully", token, user:{_id: userExists._id, username: userExists.username, role: userExists.role} });
        }else{
            res.status(400).json({ error: "Invalid User" });
        }

    } catch (error) {
        console.error("Error during user registration:", error);
        res.status(500).json({ error: "Failed to log user" });
    }
};
