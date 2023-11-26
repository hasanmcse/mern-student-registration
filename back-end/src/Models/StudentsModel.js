const mongoose = require('mongoose')

const studentsSchema = mongoose.Schema({
    firstName:{type:String},
    lastName:{type:String},
    gender:{type:String},
    dateOfBirth:{type:Date},
    nationality:{type:String},
    address:{type:String},
    email:{type:String},
    phone:{type:String},
    admissionDate:{type:Date},
    courses:{type:String},
},
{timestamps:true, versionKey:false}

)

const StudentsModel = mongoose.model('studentlist', studentsSchema);

module.exports = StudentsModel;