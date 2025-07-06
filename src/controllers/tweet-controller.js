import TweetService from "../services/tweet-service.js";

import upload from "../config/file-upload-s3-config.js";
const singleUploader = upload.array('image');

const tweetService = new TweetService();

export const createTweet = async (req,res)=>{
    try{
        singleUploader(req,res,async function (err,data){
            if(err){
                return res.status(500).json({
                    error: err
                })
            }
            const payload = {...req.body};
    if (req.file && req.file.location) {
        payload.image = req.file.location; // ✅ Attach image URL from S3
    }
            console.log('Image url is',payload)
            payload.image = req.file.location;
            const response = await tweetService.create(payload);
            return res.status(201).json({
                success: true,
                message: "Successfully created a new tweet",
                data: response,
                err:{}
            })
        })
       // console.log("REQ.BODY",req.body)
        // const response = await tweetService.create(req.body);
        // return res.status(201).json({
        //     success: true,
        //     message: "Successfully created a new tweet",
        //     data: response,
        //     err:{}
        // })
    } catch(error){
        console.log("error in controller layer")
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error
        })
    }
}


export const getTweet = async (req,res) => {
    try{
        const response = await tweetService.get(req.params.id)
        return res.status(200).json({
            success: true,
            message: "Successfully fetched a tweet",
            data: response,
            err:{}
        })
    } catch(error){
        console.log(error)
        return res.status(500).json({
            success: false,
            message: "Something went wrong",
            data: {},
            err: error
        })
    }
}