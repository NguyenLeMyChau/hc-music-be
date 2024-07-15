const mongoose = require('mongoose')

const musicSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    singer: {
        type: String,
        required: true,
        trim: true
    },
    image: {
        type: String,
        required: true
    },
    time: {
        type: String,
        required: true,
        trim: true
    },
    audio: {
        type: String,
        required: true,
        trim: true
    }
})

module.exports = mongoose.model('music', musicSchema, 'music');