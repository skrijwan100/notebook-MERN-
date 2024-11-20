const mongoose= require('mongoose')

connectserver= async()=>{
    try{
       await mongoose.connect(process.env.MONGODB_URI)
        console.log('mongo is running')
    }catch(error){
        console.log(error)

    }

}
module.exports=connectserver