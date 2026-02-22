import express from 'express';

const router = express.Router();


router.get("/signup", (req, res) => {
    res.json({ message: "Signup route" });
})

router.get("/login", (req, res) => {
    res.json({ message: "Login route" });
})

router.get("/logout", (req, res) => {
    res.json({ message: "Logout route" });
})


export default router;