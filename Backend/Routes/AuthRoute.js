const { Signup, Login, Logout } = require("../Controllers/AuthController");
const router = require("express").Router();

router.post("/signup", Signup);
router.post("/login", Login);
router.get("/logout", Logout);


// router.get("/signup", (req,res)=>{
//     res.render("signup")
// });

// router.get("/login", (req,res)=>{
//     res.render("login")
// });

module.exports = router;