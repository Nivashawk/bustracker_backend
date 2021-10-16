const mongoose = require('mongoose');
const collectionName = "User"

const UserSchema = mongoose.Schema
({
    user_id:
    {
        type: String,
        require : true
    },
    bus_id:
    {
        type: String,
        require : true
    },
    user_name:
    {
        type: String,
        require : true
    },
    user_dob:
    {
        type: Number,
        require : true
    },
    user_phone_number:
    {
        type: Number
    },
    user_age:
    {
        type: Number
    },
    user_class:
    {
        type: String,
        require : true
    },
    student_id:
    {
        type: Number,
        require : true
    },
    password:
    {
        type: Number,
        require : true
    },
    user_address:
    {
        type: String,
        require : true
    },
    user_area:
    {
        type: String
    },
    user_blood_group:
    {
        type: String
    },
    user_email:
    {
        type: String
    },
    user_vacination_status:
    {
        type: Boolean
    },
    user_parent_name:
    {
        type: String
    }
});

const Usermodel = mongoose.model('user', UserSchema, collectionName);
module.exports = Usermodel