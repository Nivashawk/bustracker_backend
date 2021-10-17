const Usermodel = require('../model/User_model')


// user login 

const login = async (req, res) => {

    const user = new Usermodel({
        student_id: req.body.student_id,
        password: req.body.password,
    });
    try {
        var query = 
        [ 
            { $match : { "student_id" : req.body.student_id } } ,
            { $project : { user_id : 1, student_id : 1, password :1, bus_id : 1 } }
        ]
        user_details = await Usermodel.aggregate(query);
        console.log(user_details);
        if (user_details[0].student_id === req.body.student_id && user_details[0].password === req.body.password ) {
            const user_id = user_details[0].user_id
            const bus_id = user_details[0].bus_id
            res.status(200).json({status : "success", message: "this user is logged in successfully", result : {user_id : user_id, bus_id : bus_id}})
        } else {
           res.json({status : "error", message: "please check the credentials"})
        }
    } catch (err) {
        res.json({status : "error", message: "No document found for this credentials, please check the user_id"})
    }
}


// get user detail

const showUserDetail = async (req, res, next) => {
    try
    {   
        var query = 
        [ 
            { $match : { "user_id" : req.body.user_id } } ,
            { $project : { user_name : 1, user_dob : 1, user_age : 1, user_phone_number : 1, user_class : 1, user_address : 1, user_blood_group : 1, user_parent_name : 1 } }
        ]
        
        const result = await Usermodel.aggregate(query);
        if(result == 0 || result == null || result == undefined)
        {
            res.json({status : "error", message: "please check the user_id" })
            
        }
        else
        {
            res.status(200).json({status : "success", message: "these are the user details you asked for", result : result })
        }
        
    }
    catch(err)
    {
        res.json({status : "error", message: "Unknown Error Found"})
    }
}





module.exports = {
    login,
    showUserDetail
}