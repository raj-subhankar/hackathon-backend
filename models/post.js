//Dependencies
var mongoose    = require('mongoose');
var Schema      = mongoose.Schema;

var PostSchema = new mongoose.Schema({
    user: {
	type: mongoose.Schema.Types.ObjectId, ref:'User',
    },
    timeStamp: {
	type: String,
	default: ''
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
    upVote: [{
        type: mongoose.Schema.Types.ObjectId, ref: 'User',
        default: []
    }],
    downVoteCount: {
	type: Number,
   	default: 0
    },
    downVote: [{
	type: mongoose.Schema,Types.ObjectId, ref: 'User',
	default: []
    }],
    pickedUpBy : {
	type: mongoose.Schema.Types.ObjectId, ref: 'User',
    }
});

PostSchema.index({ location : '2dsphere' });

module.exports = mongoose.model('Post', PostSchema);
