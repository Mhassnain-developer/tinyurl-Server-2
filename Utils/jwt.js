import jwt from "jsonwebtoken"
import dotenv from "dotenv"


dotenv.config();
export const signJWT = (payload) => {
    try{
   
        const token = jwt.sign(payload, process.env.SECRET_KEY,{
            expiresIn: "1m",
        });

        console.log(token);

    }
    catch(err) {
        console.log(err);
    }
};


export const verifyJWT = (token) => {
    try{
        jwt.verify(token,process.env.SECRET_KEY);
        return (true);
    }
    catch(err) {
       console.log(err)
    }
};


