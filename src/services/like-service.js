import {LikeRepository,TweetRepository} from "../repository/index.js";

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.TweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){    // /api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType === 'Tweet'){
            var likeable = await this.TweetRepository.find(modelId);
        } else if(modelType === 'Comment') {
            // TODO
        } else {
            throw new Error('unknown model type')
        }

        const exists = await this.likeRepository.findByUserAndLikeable({
            user: userId,
            onModel: modelType,
            likeable: modelId
        });
        console.log("FROM EXISTS",exists)
        console.log("FROM LIKEABLE",likeable)
        if(exists){
            likeable.likes.pull(exists._id);
            await likeable.save();
            await this.likeRepository.delete(exists._id); // 💥 FIXED HER
            // E
            //await exists.remove();
            var isAdded = true;

        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike._id);
            await likeable.save();
            var isAdded = false;
        }
        return isAdded;
    }
}

export default LikeService;