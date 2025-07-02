import Like from "../models/like.js";
import CrudRepository from "./crud-repository.js";

class LikeRepository extends CrudRepository {
    constructor(){
        super(Like);
    }

    async findByUserAndLikeable(data) {
        try{
            const like = await Like.findOne(data);
            return like;
        } catch(error){
            throw new error;
        }
    }

    async delete(id) {
        try {
            return await Like.findByIdAndDelete(id);
        } catch (error) {
            console.error("Error deleting Like:", error);
            throw error;
        }
    }
}

export default LikeRepository;