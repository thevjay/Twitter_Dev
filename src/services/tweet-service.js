const { TweetRepository , HashtagRepository} = require('../repository/index')

class TweetService {
    constructor() {
        this.tweetRepository =  new TweetRepository();
        this.hashtagRepository = new HashtagRepository()
    }

    async create(data) {
        const content = data.content;
        let tags = content.match(/#[a-zA-Z0-9_]+/g).map((tag)=> tag.substring(1));
        

        const tweet = await this.tweetRepository.create(data);
        let alreadyPresentTags = await this.hashtagRepository.findByName(tags)
        //console.log(alreadyPresentTags)
        let titleOfPresentTags = alreadyPresentTags.map(tags => tags.title)
    
        let newTags = tags.filter((tag)=> !titleOfPresentTags.includes(tag));
        newTags = newTags.map((tag)=>{
            return {title: tag,tweets: [tweet.id]}
        })
        //console.log(newTags)
        const response = await this.hashtagRepository.bulkCreate(newTags);
        
        alreadyPresentTags.forEach((tag)=>{
    
            tag.tweets.push(tag);
            tag.save();
        })
        // [excited,coding,js,carrer]  -> [{title: excited},{title: career}]
        // todo create hastags and add here
        /**
         * 1. bulcreate in mongoose
         * 2. filter title of hashtag based on multiple tags
         * 3. How to add tweet id inside all the hashtags
         * 
         */
        return tweet;
    }
}

module.exports = TweetService;

/**
 *  This is my #first  #tweet . I am realy #excited
 */

