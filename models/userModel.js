const mongoose = require('mongoose')

// trim :true => will help in removing the white spaces present (beginning and ending of the string).
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: Number,
        default: 0
    },
    cart: {
        type: Array,
        default: []
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Users', userSchema);

/*
Mongoose schemas support a timestamps option. If you set timestamps: true, Mongoose will add two properties of type Date to your schema:

createdAt: a date representing when this document was created
updatedAt: a date representing when this document was last updated

*/