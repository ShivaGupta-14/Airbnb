import jwt from "jsonwebtoken"
const isAuth = async (req,res,next) => {

    try {
        let {token} = req.cookies
        if(!token){
            return res.status(401).json({message:"user doesn't have a token"})
        }
        let verifyToken;
        try {
            verifyToken = jwt.verify(token,process.env.JWT_SECRET)
        } catch (err) {
            return res.status(401).json({message:"user doesn't have a valid token"})
        }
        if(!verifyToken){
            return res.status(401).json({message:"user doesn't have a valid token"})
        }
        req.userId = verifyToken.userId
        next()

    } catch (error) {
        res.status(500).json({message:`isAuth error ${error}`})
        
    }
    
}
export default isAuth