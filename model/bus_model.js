const mongoose = require('mongoose');
const collectionName = "bus"

const BusSchema = mongoose.Schema
({
    bus_id:
    {
        type: Number,
    },
    bus_route:
    {
        type: String,
    },
    bus_password:
    {
        type:Number
    },
    driver_details:
    {
        driver_name:
        {
            type: String
        },
        driver_age:
        {
            type: Number
        },
        temperature:
        {
            type: Number
        },
        vaccination_status:
        {
            type: Boolean
        },
        driver_phone_number:
        {
            type: Number
        }
    },
    route_endpoints:
    {
        type:Array
    },
    bus_current_location:
    {
        type:String
    },
    source_location:
    {
        type:String
    },
    destination_location:
    {
        type:String
    },
});

const Busmodel = mongoose.model('bus', BusSchema, collectionName);
module.exports = Busmodel