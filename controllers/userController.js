import User from "../models/usersModel.js";
import generateToken from "../token/generateToken.js";


export const getAllUsers = async (req, res) => {
    try {
        const users = await User.find()

        if (users) {
            res.status(200).json(users)
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (user && (await user.matchPassword(password))) {
            res.json({
              _id: user._id,
              name: user.name,
              email: user.email,
              isAdmin: user.isAdmin,
              phone: user.phone,
              city: user.city,
              country: user.country,
              token:generateToken(user._id)
              
            });
        }

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const register = async (req, res) => {
    try {
        const { name, email, password, phone, city, country } = req.body;
        if (userExists) {
            res.status(400).json({ message: "User already exists" });
          } else {
            const user = await User.create({
              name,
              email,
              password,
              phone,
              city,
              country,
            });
            if (user) {
              res.json({
                _id: user._id,
                name: user.name,
                email: user.email,
                isAdmin: user.isAdmin,
                phone: user.phone,
                city: user.city,
                country: user.country,
              });
            }
          }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}


export const updateProfile = async (req, res) => {

}


export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
    
        if (user) {
          res.status(200).json({ message: "User removed" });
        } else {
          res.status(404);
          throw new Error("User not found");
        }
      } catch (e) {
        res.status(500).json({ error: e.message });
      }
}


export const updateUserRole = async (req, res) => {

}
