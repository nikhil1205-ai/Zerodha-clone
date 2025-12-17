const User = require("../Models/UserModel");
const jwt = require("jsonwebtoken");

const JWT_SECRET = process.env.JWT_SECRET || "jwtsecret";

// SIGNUP (unchanged)
const Signup = async (req, res) => {
  const { email, password, username, mobile_no } = req.body;

  const exists = await User.findOne({ email });
  if (exists) {
    return res.status(400).json("User already exists");
  }

  await User.create({ email, password, username, mobile_no });
  res.status(201).json("Signup successful");
};

// LOGIN (NEW JWT LOGIC)
const Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(401).json("Invalid credentials");

  const isMatch = await user.comparePassword(password);
  if (!isMatch) return res.status(401).json("Invalid credentials");

  const token = jwt.sign(
    { id: user._id, email: user.email },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  // 🍪 HTTP-ONLY COOKIE
  res.cookie("token", token, {
  httpOnly: true,
  sameSite: "lax",   
  secure: false,    
  path: "/", 
  maxAge: 24 * 60 * 60 * 1000,
});

  res.json("Logged in");
};

const Logout = (req, res) => {
  res.clearCookie("token");
  res.json("Logged out");
};

module.exports = { Signup, Login, Logout };
