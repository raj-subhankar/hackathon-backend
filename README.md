# hackathon-backend
Hackerearth hackathon backend

#APIs

base_url = http://ec2-54-149-192-204.us-west-2.compute.amazonaws.com:3000

## To create new user
POST request to `base_url/users/add` 
required params "email" & "password"
Image should be sent as multipart request

### Request Params
nil

### Request Body

**email**,          type: String, required

**name**,           type: String, required

**password** ,      type: String, required

**aadhaarNumber**,  type: String, 

**profilePic**,     type: String, auto fill

**fullName**,       type: String,

**dob**,            type: String,

**voterId**,        type: String,

## To update user
PUT request to `base_url/users/:user_id`

### Request params

**user_id**,        type: userId

### Request Body

Any user field according to schema

## To create new post
POST request to `base_url/posts/add`
Image should be sent as multipart request

### Request Params

nil

### Request Body

**user**,           type: userId, required

**messageTitle**,   type: String

**messageBody**,    type: String

**location**,       [lat, lon]

## To update post
PUT request to `base_url/:post_id`

### Request Params

**post_id**,        type: postId

### Request Body

Any Post field, according to schema

## To upvote post
POST req to `base_url/posts/upvote`

### Request params

nil

### Request Body

**post_id**,        type: postId, required

**user_id**,        type: userId, required

## To downvote post
POST req to `base_url/posts/downvote`

### Request params

nil

### Request Body

**post_id**,        type: postId, required

**user_id**,        type: userId, required

## To add comment to post
POST req to `base_url/posts/comment`

### Request params
nil

### Request Body

**post_id**,        type: postId, required

**postedBy**,       type: userId, required

**messageBody**,    type: String 

## To get all posts in a location
GET req to `base_url/posts/all?lat=79.0106&lng=11.4289`

### Request params

**lat**,            type: Number

**lng**,            type: Number

### Request body

nil

## To get all posts by an user
GET req to `base_url/posts/all/:user_id`

### Request Params

**user_id**,        type: userId

### Request Body

nil

#Schemas

## User
**email**,          type: String, required: true

**name**,           type: String, required: true

**password** ,      type: String, required: true

**aadhaarNumber**,  type: String,

**isRepresentative**, type: Boolean, default: False

**profilePic**,     type: String, auto fill

**fullName**,       type: String,

**dob**,            type: String,



## Post
**user**,           type: userId, required: true

**messageTitle**,   type: String

**messageBody**,    type: String

**location**,       [lat, lon]

**pickedUpBy**,     type: userId

**assignedTo**,     type: userId

**timeStamp**,      type: Date,   auto fill

**upVoteCount**,    type: Number

**upVotes**,        type: [userId]

**downVoteCount**,  type: Number

**downVotes**,      type: [userId]

**comments**,       type: [commentId]

**commentCount**,   type: Number

**imageUrl**,       type: String, auto fill


## Comment

**postedBy**,           type: userId, required: true

**timeStamp**,      type: Date, auto fill

**messageBody**,     type: String

