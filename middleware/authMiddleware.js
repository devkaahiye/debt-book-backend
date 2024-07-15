import jwt from 'jsonwebtoken'
import User from '../models/usersModel.js';

const protect = async (req, res, next)=>{
    let token;

    if (req.headers.token && req.headers.token.startWith('Bearer')) {

        try {
            
            token  = req.headers.token.split(" ")[1]

            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id)

            next()

        } catch (error) {
            console.error(error);
           res.status(401).json({ error: "Not authorized, token failed" });
        }
        
    }else{
        res.status(401).json({ error: "Not authorized, no token" });
    }

}

const admin = (req, res, next)=>{
    try {

        if(req.user && req.user.isAdmin){
            next()
        }
        
    } catch (error) {
        res.status(401).json({ error: "Not authorized as admin" });
    }
}


export { protect , admin }