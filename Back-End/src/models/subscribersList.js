const {Schema, model} = require("mongoose")

const subscribersList =new Schema ({
    channel : {
        type : Schema.Types.ObjectId(),
        ref : "channels"
    },
    user : {
        type : Schema.Types.ObjectId(),
        ref : "users"
    }
})

const SubscriberList = model("subscribersList", subscribersList)
module.exports = SubscriberList