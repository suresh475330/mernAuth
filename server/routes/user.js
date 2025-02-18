const router = require("express").Router();

const {register,login,logout,getUser, getLoginStatus, 
    updateUser, changePassword ,forgotPassword, resetPassword} = require("../controllers/user");
const {protect} = require("../middleware/authMiddleware");

router.post("/register",register);
router.post("/login",login);
router.get("/logout",logout);
router.get("/getuser",protect,getUser);
router.get("/loggedin",getLoginStatus);
router.patch("/updateuser",protect,updateUser);
router.patch("/changepassword",protect,changePassword);
router.post("/forgotpassword",forgotPassword);
router.put("/resetpassword/:resetToken",resetPassword);

module.exports = router;
