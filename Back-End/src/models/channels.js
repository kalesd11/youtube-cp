const {Schema, model} = require("mongoose")

const channelSchema = new Schema({
    channelName : {
        type:String,
        required:true
    },
    createdAt:{
        type : String,
        default : Date.now
    }
})

const Channels = model("channel", channelSchema)
module.exports = Channels