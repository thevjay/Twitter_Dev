const { TweetRepository } = require('../repository/index')

class TweetService {
    constructor() {
        this.TweetRepository =  new TweetRepository();
    }

    create(data) {
        const content = data.content;
        const tags = content.match(/#[a-z0-9_]+/g);  //this regex extracts hashtags
        tags = tags.map((tag)=> tag.substring(1));
        console.log(tags)
    }
}

module.exports = TweetService;
/**
 *  This is my #first  #tweet . I am realy #excited
 */

