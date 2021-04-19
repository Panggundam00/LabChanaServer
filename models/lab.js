const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const labSchema = new Schema({
    id: Number,
    title: String,
    status: Number,
    start_date: Date,
    start_time: Date,
    end_date: Date,
    end_time: Date
});

const LabModel = mongoose.model('Lab', labSchema)
module.exports = LabModel