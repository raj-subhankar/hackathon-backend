# hackathon-backend
Hackerearth hackathon backend

<<<<<<< HEAD
=======
#APIs

## To create new user
POST request to localhost:3000/users/add with the minimum required fields

## To update user
PUT request to localhost:3000/users/:user_id

## To create new post
POST request to 



>>>>>>> 60640f2af5b41f29ebd94d270d07e31e997ee7c8
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

**user**,           type: userId, required: true

**timeStamp**,      type: Date, auto fill

**messageBody**,     type: String

