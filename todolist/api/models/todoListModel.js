var mongoose=require("mongoose");
var schema=mongoose.Schema

var schema_to_do=new schema({
    name:{
        type:String,
        required: "Enter the name of the task"
    },
    Created_date:{
        type:Date,
        default: Date.now
    },
    status:{
        type:[{ 
            type:String,
            enum:["Pending","Completed","Ongoing"]
            }],
        default:"Pending"
    }
    
});

module.exports = mongoose.model('Tasks', schema_to_do);