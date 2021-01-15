const mongoose=require('mongoose');//mongoose ODM
const contactschema=new mongoose.Schema({//schema creation
    name:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    time:{
        type:String,
        required:true
    }

});
const Contact = mongoose.model('Contact',contactschema);
module.exports=Contact;//exporting schema