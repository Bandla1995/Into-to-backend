import { User } from "../src/models/user.model.js";

const registerUser = async (req, res) => {
    try {
        const { username, password, email } = req.body;

        // basic validation
        if (!username || !password || !email) {
            return res.status(400).json({ message: "All fields are required." });
        }

        // check if user already exists
        const existingUser = await User.findOne({ email: email.toLowerCase() });
        if (existingUser) {
            return res.status(409).json({ message: "User already exists." });
        }

        // create user

        const user = await User.create({
            username,
            password,
            email: email.toLowerCase()
        });

        res.status(201).json({ message: "User registered successfully", user: {id: user._id, email: user.email, username: user.username} });

    } catch (error) {
        res.status(500).json({ message: "Server error", error: error.message });
    }
}

const loginUser = async (req, res) => {
    try {
        // checking if the user exists
       const { email, password } = req.body;

     
        const user = await User.findOne({
            email: email.toLowerCase()
            
        });

       if (!user) return res.status(400).json({
            message: "User does not exist"
        })

        // compare passwords
       const isMatch = await user.comparePassword(password);
        if(!isMatch) return res.status(400).json({
            message: "Invalid credentials"
        })

        // login successful

       res.status(200).json({
       message: "Login successful",
        user: {
               id: user._id,
               email: user.email,
              username: user.username
           }
       })
    
    } catch (error) { 
        res.status(500).json({
          message: "Internal Server error",
          error: error.message
       })

   }
}

const logoutUser = async (req, res) => {
    try {
        // logic for logging out user can be implemented here
        const {email} = req.body;
        const user = await User.findOne({
            email
        });

        if (!user) return res.status(404).json({
            message: "User not found"
        })

        res.status(200).json({
            message: "Logout successful"
        })

    } catch (error) {
        res.status(500).json({
            message: "Server error", error: error.message
        });
    }
}
export {
    registerUser,
    loginUser,
    logoutUser
};