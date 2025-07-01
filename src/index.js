import express from 'express'
import connect from './config/database.js';
import apiRoutes from './routes/index.js'

const app = express();

import { UserRepository,TweetRepository } from './repository/index.js'
import LikeService from './services/like-service.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true}))

app.use('/api',apiRoutes)

app.listen(3000,async()=>{
    console.log('server started');
    await connect();
    console.log("Mongo db connected");

    const userRepo = new UserRepository();
    const tweetRepo = new TweetRepository();
    const tweets = await tweetRepo.getAll(0,10);

    const user = await userRepo.create({
        email:'vjhbubwqwh@admin.com',
        password:'123456',
        name:'Vijayhgh'
    });

    const likeService = new LikeService();
    await likeService.toggleLike(tweets[0].id, 'Tweet',user.id);
})