import {LikeRepository,TweetRepository} from "../repository/index.js";

class LikeService {
    constructor(){
        this.likeRepository = new LikeRepository();
        this.TweetRepository = new TweetRepository();
    }

    async toggleLike(modelId,modelType,userId){    // /api/v1/likes/toggle?id=modelid&type=Tweet
        if(modelType === 'Tweet'){
            var likeable = await this.TweetRepository.get(modelId);
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

        if(exists){
            likeable.likes.pull(exists.id);
            await likeable.save();
            await exists.remove();
            var isAdded = true;

        } else {
            const newLike = await this.likeRepository.create({
                user: userId,
                onModel: modelType,
                likeable: modelId
            });
            likeable.likes.push(newLike);
            await likeable.save();
            var isAdded = false;
        }
        return isAdded;
    }
}

export default LikeService;