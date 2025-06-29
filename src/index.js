const express = require('express')
const connect = require('./config/database');
const app = express();

// const Tweet = require('./models/tweet');
//const HashtagRepository = require('./repository/hashtag-repository');
const TweetService = require('./services/tweet-service');

app.listen(3000,async()=>{
    console.log('server started');
    await connect();
    console.log('Mongo db connected')
    // const tweets = await Tweet.find({
    //     content:["First tweet","my tweet","12m34"]
    // })
    // console.log("TWeets:",tweets)

    //let repo = new HashtagRepository();
    // await repo.bulkCreate([
    //     {
    //         title: 'Trend',
    //         tweets:[]
    //     },
    //     {
    //         title: 'Excited',
    //         tweets:[]
    //     },
    //     {
    //         title: 'Python',
    //         tweets:[]
    //     },
    //     {
    //         title: 'Fun',
    //         tweets:[]
    //     },
    //     {
    //         title: 'Carrer',
    //         tweets:[]
    //     },
    // ])
    //let response = await repo.findByName(['Excited','Trend'])
    // let service = new TweetService();
    // const tweet = await service.create({ content: "is #tweets woorking ?"})
    // console.log(tweet)
})