const  mongoose=require('mongoose')
const { Schema } = mongoose;

const Usershschema = new Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        require:true,
        unique:true,
    },
    password:{
        type:String,
        require:true,
    },
    data:{
        type:String,
        default:Date,
    }
    
 
});
module.exports=mongoose.model('User',Usershschema);