const jwt = require("jsonwebtoken");
const JWT_SECRET = process.env.JWT_SECRET || "jwtsecret";

module.exports = (req, res, next) => {

  const token = req.cookies.token;
  console.log(req.cookies);
  if (!token){
    return res.status(401).json("Not authenticated");
  }

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded; // { id, email }
    next();
  } catch (err) {
    return res.status(401).json("Invalid token");
  }
};
