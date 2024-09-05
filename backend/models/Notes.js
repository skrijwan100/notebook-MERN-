const  mongoose=require('mongoose')
const { Schema } = mongoose;

const Noteshschema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'User'

    },
    title:{
        type:String,
        require:true,
    },
    disc:{
        type:String,
        require:true,
    },
    tag:{
        type:String,
    },
    data:{
        type:String,
        default:Date,
    }
    
 
});
module.exports=mongoose.model('Notes',Noteshschema);