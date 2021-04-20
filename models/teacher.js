const mongoose = require('mongoose') ;
const Schema = mongoose.Schema ;

const teacherSchema = new Schema({
    id: Number,
    name: String,
    username: String,
    password: String
});

const TeacherModel = mongoose.model('Teacher', teacherSchema)
module.exports = TeacherModel