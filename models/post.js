//Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    user: {
	type: mongoose.Schema.Types.ObjectId, ref:'User',
    },
    timeStamp: {
	type: Date,
	default: Date.now
    },
    messageTitle: {
	type: String,
	default: ''
    },
    messageBody: {
	type: String,
	default: ''
    },
    imageUrl: {
	type: String,
	default: ''
    },
    location: {
	type: {
	    type: String,
	    default: 'Point'
	},
	coordinates: [Number]
    },
    upVoteCount: {
        type: Number,
        default: 0
    },
    upVotes: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        default: []
    }],
    downVoteCount: {
	type: Number,
   	default: 0
    },
    downVotes: [{
	type: mongoose.Schema.Types.ObjectId, ref: 'User',
	default: []
    }],
    comments: [{
    	type: mongoose.Schema.Types.ObjectId, ref: 'Comment'
    }], 
    commentCount: {
	type: Number,
	default: 0
    },
    pickedUpBy : {
	type: mongoose.Schema.Types.ObjectId, ref: 'User',
    }
});

PostSchema.index({ location : '2dsphere' });

module.exports = mongoose.model('Post', PostSchema);
