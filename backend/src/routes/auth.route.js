import express from "express" 
import { login, signup, signout, updateProfile, checkAuth} from "../controllers/auth.controllers.js"
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router() 

router.post("/signup",signup);

router.post("/login", login);

router.post("/signout", signout);

router.put("/update-profile", protectRoute, updateProfile)

router.get("/check", protectRoute, checkAuth)

export default router; 
// Left off 
