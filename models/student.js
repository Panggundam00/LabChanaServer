const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const teacherSchema = new Schema({
    id: Number,
    name: String,
    username: String,
    password: String
});

const StudentModel = mongoose.model('Student', teacherSchema)
module.exports = StudentModel