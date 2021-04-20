const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const answerSchema = new Schema({
    id: Number,
    student_id: String,
    testcase_id: String,
    status: String
});

const AnswerModel = mongoose.model('Answer', answerSchema)
module.exports = AnswerModel