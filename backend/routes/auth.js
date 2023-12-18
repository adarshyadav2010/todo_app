const router = require("express").Router();

const User = require("../models/user")
const bcrypt = require('bcryptjs')

// sign up
router.post("/register", async (req, res) => {
    try {
        const { email, username, password } = req.body;
        const haspassword = bcrypt.hashSync(password);
        const user = new User({ email, username, password: haspassword });
        await user.save().then(() => {
            res.status(200).json({message:"Sign Up Successfull"})
        })
    } catch (error) {
        res.status(200).json({ message: "User Already Exists" });
    }
})

// sign in

router.post("/signin", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email });
        if (!user) {
            return res.status(200).json({ message: "Please Sign Up First" })
        }

        const isPasswordCorrect = bcrypt.compareSync(
            req.body.password,
            user.password
        );
        if (!isPasswordCorrect) {
            return res.status(200).json({ message: "Password Is Not Correct" })
        }
          const {password,...others}=user._doc;
        res.status(200).json({ others });

    } catch (error) {
    res.status(200).json({ message: "User Already Exists" });
}
})


module.exports = router;
