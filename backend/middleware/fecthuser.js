var jwt = require('jsonwebtoken');
JWT_SECERT="qp^)#gz*VNI"

const fetchuser=(req,res,next)=>{
    let token=req.header('auth-token')
    if(!token){
        res.status(401).json({error:"Use a valid token"})
    }
    try {
        const data = jwt.verify(token,JWT_SECERT)
        console.log(data)
        req.user=data.user
        next();
        
    } catch (error) {
        res.status(401).json({error:"Use a valid token"}) 
    }

}

module.exports=fetchuser;
