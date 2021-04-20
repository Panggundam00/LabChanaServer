const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const problemSchema = new Schema({
    id: Number,
    title: String,
    content: String,
    lab_id: String
});

const ProblemModel = mongoose.model('Problem', problemSchema)
module.exports = ProblemModel