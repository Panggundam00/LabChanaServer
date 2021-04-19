const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const testcaseSchema = new Schema({
    id: Number,
    problem_id: ObjectId,
    input: String,
    output: String
});

const TestcaseModel = mongoose.model('Lab', testcaseSchema)
module.exports = TestcaseModel