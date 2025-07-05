import express from 'express'
import connect from './config/database.js';
import apiRoutes from './routes/index.js'
import passport from 'passport';

const app = express();

import { passportAuth } from './config/jwt-Middleware.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use(passport.initialize());
passportAuth(passport)

app.use('/api',apiRoutes)

app.listen(3000,async()=>{
    console.log('server started');
    await connect();
    // console.log("Mongo db connected");

    // const userRepo = new UserRepository();
    // const tweetRepo = new TweetRepository();
    // const tweets = await tweetRepo.getAll(0,10);
    // const users = await userRepo.getAll();
    // const user = await userRepo.create({
    //     email:'vijay@admin.com',
    //     password:'123456',
    //     name:'Vijay'
    // });

    // const likeService = new LikeService();
    // await likeService.toggleLike(tweets[0].id, 'Tweet',users[0].id);

})

/***
 * gpay -> psp (icici) -> NPCI -> BOB  -> NPCI -> BOA -> NPCI -> PSP (yes bank) -> Phonepe
 * 
 */

/**
 * user -> unique_id
 * 
 * https://www.mywebsite.com/verifyEmail/skhve8w874rte41
 * 
 * verifyEmail/:unique_id
 * 
 * db -> userid -> unique_id -> createdAt -> isVerified
 */