const mongoose= require('mongoose')
const mongoURI='mongodb://localhost:27017'
// const mongoURI='mongodb+srv://rijwansk329:SKRIJWAN%402006@clusterdb.7cmvf.mongodb.net/Notedb'

connectserver= async()=>{
    try{
       await mongoose.connect(mongoURI)
        console.log('mongo is running')
    }catch(error){
        console.log(error)

    }

}
module.exports=connectserver