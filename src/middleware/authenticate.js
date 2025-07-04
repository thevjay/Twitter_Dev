import passport from "passport";

export const authenticate = (req,res,next) => {
    console.log("inside middleware")
    passport.authenticate('jwt',(err,user)=>{
        console.log("AUTHENTICATE",err,user)
        if(err) next(err);
        if(!user){
            return res.status(401).json({
                message:'Unauthorized access'
            })
        }
        req.user = user;
        next()
    })(req,res,next)
}