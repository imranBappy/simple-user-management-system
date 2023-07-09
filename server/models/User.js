const { Schema, model, Types } = require('mongoose')
const emailValidator = require('../utils/emailValidator')

const usersSchema = new Schema({
    name: {
        type: String,
        required: [true, 'Name is require!'],
        min: 2,
        max: 30
    },
    email: {
        type: String,
        required: [true, 'Email is require!'],
        lowercase: true,
        trim: true
    },
    phone: {
        type: String,
        required: [true, 'Phone is require!'],
        trim: true
    }

}, { timestamps: true })

const User = model('User', usersSchema)

module.exports = User;