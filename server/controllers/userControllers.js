const User = require("../models/User");

exports.usersGetController = async (req, res, next) => {
    try {
        const users = await User.findById({})
        res.json(users)
    } catch (error) {
        next(error)
    }
}

exports.userGetController = async (req, res, next) => {
    try {
        const { id } = req.prams;
        const user = await Auth.findById(id)
        res.json(user)
    } catch (error) {
        next(error)
    }
}

exports.userPostController = async (req, res, next) => {
    try {
        let { name, email, phone } = req.body;

        const user = await Auth.findOne({ email: email })
        if (user) {
            return res.status(500).json({ message: 'User Already Exist!' })
        }
        const newUser = new User({ name, email, phone })
        await newUser.save();
        res.json(newUser)
    }
    catch (error) {
        next(error)
    }
}


exports.userPutController = async (req, res, next) => {
    try {
        const { name, email, phone } = req.body;
        const user = await User.findById(req.user._id);
        if (!user) {
            res.json({
                message: 'User not found!',
                error: true
            })
        }

        user.name = name || user.name;
        user.email = email || user.email;
        user.phone = phone || user.phone;

        await user.save();
        res.json(user)

    }
    catch (error) {
        next(error)
    }
}

exports.userDeleteController = async (req, res, next) => {
    try {
        const { id } = req.prams;
        const user = await User.findById(req.user._id);
        if (user) {
            await User.findByIdAndDelete(id);
        }
        res.json(user)
    }
    catch (error) {
        next(error)
    }
}
