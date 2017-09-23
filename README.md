# hackathon-backend
Hackerearth hackathon backend

#APIs

base_url = http://ec2-54-149-192-204.us-west-2.compute.amazonaws.com:3000

## To create new user
POST request to `base_url/users/add` 
required params "email" & "password"
Image should be sent as multipart request

## To update user
PUT request to `base_url/users/:user_id`

## To create new post
POST request to `base_url/posts/add`
Image should be sent as multipart request

## To update post
PUT request to `base_url/:post_id`

## To upvote post
POST req to `base_url/posts/upvote`
required params, "post_id" & "user_id"

## To downvote post
POST req to `base_url/posts/downvote`
required params, "post_id" & "user_id"

## To add comment to post
POST req to `base_url/posts/comment`
required params, "post_id", "user_id"

#Schemas

## User
**email**,          type: String, required: true

**name**,           type: String, required: true

**profilePic**,     type: String, auto fill

**password** ,      type: String, required: true

**fullName**,       type: String,

**dob**,            type: String,

**voterId**,        type: String,

**loginAttempts**,  type: Number, auto fill

**lockUntil**,      type: Number, auto fill

## Post
**user**,           type: userId, required: true

**timeStamp**,      type: Date,   auto fill

**messageTitle**,   type: String

**messageBody**,    type: String

**imageUrl**,       type: String, auto fill

**location**,       [lat, lon]

**upVoteCount**,    type: Number

**upVotes**,        type: [userId]

**downVoteCount**,  type: Number

**downVotes**,      type: [userId]

**comments**,       type: [commentId]

**commentCount**,   type: Number

## Comment

**postedBy**,           type: userId, required: true

**timeStamp**,      type: Date, auto fill

**messageBody**,     type: String

