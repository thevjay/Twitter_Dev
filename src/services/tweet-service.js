import { TweetRepository , HashtagRepository} from '../repository/index.js'

class TweetService {
    constructor() {
        this.tweetRepository =  new TweetRepository();
        this.hashtagRepository = new HashtagRepository()
    }

    async create(data) {
    try {
        //console.log("Service: Creating tweet with content:", data.content);
        const content = data.content;

        let tags = content.match(/#[a-zA-Z0-9_]+/g)?.map((tag) => tag.substring(1).toLowerCase()) || [];

        //console.log("Extracted hashtags:", tags);

        const tweet = await this.tweetRepository.create(data);
        //console.log("Tweet created:", tweet);

        let alreadyPresentTags = await this.hashtagRepository.findByName(tags);
        let titleOfPresentTags = alreadyPresentTags.map(t => t.title);

        let newTags = tags
            .filter((tag) => !titleOfPresentTags.includes(tag))
            .map((tag) => ({ title: tag, tweets: [tweet.id] }));

        if (newTags.length > 0) {
            await this.hashtagRepository.bulkCreate(newTags);
        }

        alreadyPresentTags.forEach((tag) => {
            tag.tweets.push(tweet._id);
            tag.save();
        });

        return tweet;

    } catch (error) {
        console.log("Error in service layer:", error);
        throw error; // ensure error is thrown so controller can catch
    }
}

}

export default TweetService;

/**
 *  This is my #first  #tweet . I am realy #excited
 */

