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