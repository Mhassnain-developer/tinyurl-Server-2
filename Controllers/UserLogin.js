import {signJWT} from "../Utils/jwt.js";

export const UserLogin = async (req, res) => {
    const {email , password} =req.body;

    try{
        const userFound = {
            email: email,
            userId: "123",
        };

        const jwtToken = signJWT(userFound);
        res.status(200).json({
            ok:true,
            jwtToken:jwtToken,
        });
    }
    catch (err) {
        res.status(500).json ({
            ok:false,
        });
    }
};