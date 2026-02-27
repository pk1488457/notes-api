const mongoose = require("mongoose");

    const UserSchema = mongoose.Schema({

        username : {
            type : String,
            requried : true
        },
        password :{
             type : String,
             requried : true            
        },
         email : {
         type : String,
         requried : true
        },

    }, {timestamps : true });

    module.exports = mongoose.model("user", UserSchema);
