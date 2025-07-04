import jwt from 'passport-jwt';
import User from '../models/user.js';

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;


const opts = {
    jwtFromRequest:ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey:"fsd"
}

export const passportAuth =(passport)=>{
    try{
        passport.use(new JwtStrategy(opts,async(jwt_payload,done)=>{
        console.log("inside the strategy")
       const user = await User.findById(jwt_payload.id)
       if(!user){
            done(null,false)
       }else{
        done(null,user);
       }
    }))
    } catch (error){
        console.log(error)
        throw new error;
    }
}