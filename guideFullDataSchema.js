const mongoose = require('mongoose');

const ReactFormDataSchema = new mongoose.Schema({
    firstName: {
        type: String,
    },
    lastName:{
        type:String,
    },
    userName:{
        type:String,
        unique:true
    },
    passWord:{
        type:String
    },
    userType:{
        type:String
    },
    languages:{
        type:String,
    },
    availaibility:{
        type:Boolean,
        default:true
    },
    qualifications:{
        type:String,
    },
    experience:{
        type:String,
    },
    phNo:{
        type:Number,
    },
    email:{
        type:String,
    },
    price:{
        type:String,
    },
    location:{
        type:String
    },
    rating:{
        type:String
    },
    accountNo:{
        type:String
    },
    incomingReq:{
        type:String,
       default:"no"
    },
    outgoingReq:{
        type:String,
        default:"no"
    },
    image:{
        data:Buffer,
        contentType:String
    }
});

const guide = mongoose.model('guide', ReactFormDataSchema);
module.exports = guide;