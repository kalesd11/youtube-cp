const {Schema, model} = require("mongoose")

const userSchema = new Schema({
    name :{
        type : String,
        required : true
    },
    DOB:{
        type:String,
        
    },
   Place : {
        type : String
   }
})

const Users = model("user", userSchema)
module.exports = Users