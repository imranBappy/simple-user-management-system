const User = require("../models/User");

exports.usersGetController = async (req, res, next) => {
    try {
        const users = await User.find({})
        res.json(users)
    } catch (error) {
        next(error)
    }
}

exports.userGetController = async (req, res, next) => {
    try {
        const { id } = req.params;
        const user = await User.findById(id);
        res.json(user)
    } catch (error) {
        next(error)
    }
}

exports.userPostController = async (req, res, next) => {
    try {
        let { name, email, phone } = req.body;
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
        const { id } = req.params;
        const user = await User.findById(id);
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
        const { id } = req.params;
        const user = await User.findById(id);
        if (user) {
            await User.findByIdAndDelete(id);
        }
        res.status(200).json(user)
    }
    catch (error) {
        next(error)
    }
}
