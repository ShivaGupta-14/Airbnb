// Help to generate token

import jwt from "jsonwebtoken";

const generateToken = async (userId) => {
    try {
        let token = await jwt.sign({userId},process.env.JWT_SECRET,{expiresIn:"30d"})
        return token;
    } catch (error) {
        console.log("Token error");
    }
}

export default generateToken;