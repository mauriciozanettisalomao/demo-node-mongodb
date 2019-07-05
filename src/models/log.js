const mongoose = require('mongoose');

const LogSchema = new mongoose.Schema({
        code: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        }
    }, 
    {
        timestamps: true
    }
);

const Log = mongoose.model('Log', LogSchema);

module.exports = Log;

