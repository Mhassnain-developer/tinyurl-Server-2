import { verifyJWT } from "../Utils/jwt.js";


export const AdminRequests = async (req, res) => {
    try{
        const jwtToken = req.headers["authorization"].split("Bearer ")[1];

        console.log(jwtToken);

        const userInfo = verifyJWT(jwtToken);

        console.log(userInfo)

        if(!userInfo) {
            return res.status(401).json({message: "login expired"});
        }
            
    
    

    res.status(200).json({
        ok:true,

    });
}
catch(err){
    console.log(err)
    res.status(500).json({
        ok:false,
    });
}
};