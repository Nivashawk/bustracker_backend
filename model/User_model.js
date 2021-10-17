const mongoose = require('mongoose');
const collectionName = "user"

const UserSchema = mongoose.Schema
({
    user_id:
    {
        type: Number,
    },
    bus_id:
    {
        type: Number,
    },
    user_name:
    {
        type: String,
    },
    user_dob:
    {
        type: Number,
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