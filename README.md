# hackathon-backend
Hackerearth hackathon backend

#Schemas

## User
email,          type: String, required: true
name,           type: String, required: true
profilePic,     type: String, auto fill
password ,      type: String, required: true
fullName,       type: String,
dob,            type: String,
voterId,        type: String,
loginAttempts,  type: Number, auto fill
lockUntil,      type: Number, auto fill

## Post
user,           type: userId, required: true
timeStamp,      type: Date,   auto fill
messageTitle,   type: String
messageBody,    type: String
imageUrl,       type: String, auto fill
location,       [lat, lon]
upVoteCount,    type: Number
upVotes,        type: [userId]
downVoteCount,  type: Number
downVotes,      type: [userId]
comments,       type: [commentId]
commentCount,   type: Number

## Comment

user,           type: userId, required: true
timeStamp,      type: Date, auto fill
messageBody     type: String
