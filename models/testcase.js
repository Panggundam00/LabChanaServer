const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const testcaseSchema = new Schema({
    id: Number,
    problem_id: String,
    input: String,
    output: String
});

const TestcaseModel = mongoose.model('Testcase', testcaseSchema)
module.exports = TestcaseModel