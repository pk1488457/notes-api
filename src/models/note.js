const mongoose = require("mongoose");

    const NoteSchema = mongoose.Schema({

        title : {
            type : String,
            requried : true
        },
        description :{
             type : String,
             requried : true             
        },
    userId : {
         type : mongoose.SchemaTypes.ObjectId ,
         ref: "User",
         requried : true
    },

    }, {timestamps : true });

    module.exports = mongoose.model("Note", NoteSchema);
