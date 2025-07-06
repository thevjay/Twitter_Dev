# Requirements:

- User should be able to create a post
    - [The post/tweet cannot be more than 250 chars]
    - [Every post/tweet will be having support for image upload]

- Any post should be visible to all those users who follows the auther
- Anyone who follows you can comment on a post/tweet
- Anyone who follows you can like on a post/tweet
- we can comment on a comment
- We can like any comment also
- Retweeting

- User profile:
    - Name
    - Follower count
    - Bio
    - Last 10 tweets from the user

- Pagination on tweets
- User auth

- Everytweet might be having a hashtag

# use server side rendering vs server-driven ui  and config-driven UI

# extract hashtags from complex string using regex:
- https://stackoverflow.com/questions/43398984/extract-hashtags-from-complex-string-using-regex

# regex to get all hashtags from a string

```
    let str = "This is my #first #tweet , really #excited"

    str.match(/#[a-z0-9_]+/g);

   [ ` #first` , `#tweet` , `#excited`]
```

# mongoose Hooks:


1 - Comments and Likes
2 - Passport user auth
3 - Misc & S3 image upload
4 - Testing
5 - Web sockets - Chat app 1
6 - Chat app 2
7 - Docker | Deployment | CICD
8 - GRPC -> 2 services | client , server | protobuf
9 - Redis caching
10 - Extra







# ------------------------------------------------------------------
- System design interview
- Iterator generator



# --------------------------------------------------------------
### AWS S3:
# Amazon S3: - Cloud Object Storage static content Simple storage Service
- static - it means fixed data

### aws-sdk npm 
- is npm packesga connect to directly aws
- install 
- npm i aws-sdk

### multer  - uploading files. 
- npm i multer 
### multer-s3 
- npm i multer-s3
- error in above the version
- we need to install in 2x 
- npm i multer-s3@2.10.0

### upload.array in multer



### TDD development:
- this is input this output of my features

### Jest:
- npm install jest 
- npm install --save-dev @babel/plugin-transform-modules-commonjs


### Unit   testing
- testing one branch of function like it check small of uint function any

### 

### mockFn.mockImplementation(fn);
- Accepts a function that should be used as the implementation of the mock. The mock itself 

### Spy on:
- 
 



- npm jest --coverage